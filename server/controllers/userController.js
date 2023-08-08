const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User} = require('../models/models')
const {handleFileUpload} = require("../utils/fileUtils");
const {calculateNextUpdateDate, isLaterDate} = require("../utils/dateUtils");
const {allowedAvatarExtensions} = require("../config/config");
const {generateJwt} = require("../utils/jwtUtils");
const {generateNickname} = require("../utils/helpers");
const {isNicknameUnique} = require("../utils/validationUtils");


class UserController {

    async updateProfile(req, res, next) {
        try {
            const {nickname} = req.body;
            let user = await User.findByPk(req.user.id, {
                attributes: {exclude: ['password', 'role']}
            })

            const nextUpdateDate = await calculateNextUpdateDate(user.nicknameUpdatedAt, 14);
            const canBeUpdated = await isLaterDate(Date.now(), nextUpdateDate);

            if (nickname && !canBeUpdated) {
                const errorMessage = `Nickname can only be changed once every two weeks. Next update can be done after ${nextUpdateDate}`;
                return next(ApiError.tooManyRequests(errorMessage));
            }

            if (nickname && canBeUpdated) {
                const isUnique = await isNicknameUnique(nickname)
                if (!isUnique) {
                    return next(ApiError.badRequest(`Nickname "${nickname}" is already occupied`));
                }
                user.nickname = nickname;
                user.nicknameUpdatedAt = new Date();
            }

            if (req.files && req.files.avatar) {
                try {
                    const uploadedFileName = await handleFileUpload(req.files.avatar, allowedAvatarExtensions, 'avatar_');
                    user.avatar = uploadedFileName;
                } catch (error) {
                    return next(ApiError.badRequest(error.message));
                }
            }

            await user.save()

            return res.json(user)
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async getProfile(req, res, next) {
        try {
            let data = await User.findByPk(req.user.id, {
                attributes: {exclude: ['password', 'role']}
            })

            return res.json(data)
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async oauthGoogle(req, res, next) {
        try {
            const info = req.user._json
            let token;
            let user;
            const email = info.email;
            const existingUser = await User.findOne({where: {email: info.email}})

            if (existingUser) {
                if (existingUser.provider !== 'google') {
                    return next(ApiError.badRequest('User with such email already exists'))
                }
                token = generateJwt(existingUser.id, existingUser.email, existingUser.role)

                res.redirect('/oauth?token=' + token)

            }
            const nickname = await generateNickname(email);
            const avatar = info.picture.slice(info.picture.indexOf('com') + 3)
            user = await User.create({
                nickname,
                email,
                role: 'USER',
                provider: 'google',
                avatar
            })
            token = await generateJwt(user.id, user.email, user.role)
            res.redirect('/oauth?token=' + token)

        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async oauthFacebook(req, res, next) {
        try {
            const email = req.user._json.email
            let token;
            let user;
            const existingUser = await User.findOne({where: {email}})

            if (existingUser) {
                if (existingUser.provider !== 'facebook') {
                    return next(ApiError.badRequest('User with such email already exists'))
                }
                token = generateJwt(existingUser.id, existingUser.email, existingUser.role)
                res.redirect('/oauth?token=' + token)
            }
            const nickname = await generateNickname(email);
            const fbAvatar = req.user._json.picture.data.url;
            const avatar = fbAvatar.slice(fbAvatar.indexOf('net') + 3)
            user = await User.create({
                nickname,
                email,
                role: 'USER',
                provider: 'facebook',
                avatar
            })
            token = await generateJwt(user.id, user.email, user.role)
            res.redirect('/oauth?token=' + token)

        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async getMostScored(req, res, next) {
        try {
            let {categoryId, limit} = req.query
            limit = limit || 10
            let users
            if (categoryId) {
                users = await User.findAll({where: {categoryId}, limit, order: [['score', 'ASC']]})
            } else {
                users = await User.findAll({limit, order: [['score', 'DESC']]})
            }

            return res.json(users)
        } catch (e) {
            next(ApiError.internal(e.message))
        }

    }

    async registration(req, res, next) {
        try {
            const {email, password} = req.body

            if (!email || !password) {
                return next(ApiError.badRequest('Incorrect email or password'))
            }
            const candidate = await User.findOne({where: {email}})
            if (candidate) {
                return next(ApiError.badRequest('User with such email already exists'))
            }
            const nickname = await generateNickname(email);
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({nickname, email, password: hashPassword})

            const token = await generateJwt(user.id, user.email, user.role)

            return res.json({token})
        } catch (e) {
            next(ApiError.internal(e.message))
        }

    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({where: {email}})
            if (!user) {
                return next(ApiError.internal('User with such email was not found'))
            }
            let comparePassword = bcrypt.compareSync(password, user.password)
            if (!comparePassword) {
                return next(ApiError.internal('Incorrect password'))
            }
            const token = await generateJwt(user.id, user.email, user.role)
            res.json({token})
        } catch (e) {
            next(ApiError.internal(e.message))
        }

    }

    async check(req, res, next) {
        try {
            const token = await generateJwt(req.user.id, req.user.email, req.user.role)
            return res.json({token})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new UserController()