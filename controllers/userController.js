const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {

    async oauthGoogle(req, res, next) {
        try {
            const info = req.user._json
            let token;
            let user;
            const existingUser = await User.findOne({where: {email: info.email}})

            if (existingUser) {
                if (existingUser.provider !== 'google') {
                    return next(ApiError.badRequest('User with such email already exists'))
                }
                token = generateJwt(existingUser.id, existingUser.email, existingUser.role)
                return res.json({token})
            }
            const avatar = info.picture.slice(info.picture.indexOf('com') + 3)
            user = await User.create({
                email: info.email,
                role: 'USER',
                provider: 'google',
                avatar
            })
            token = generateJwt(user.id, user.email, user.role)
            return res.json({token})

        } catch (e) {
            next(ApiError.badRequest(e.message))
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
            next(ApiError.badRequest(e.message))
        }

    }

    async registration(req, res, next) {
        try {
            const {email, password, role} = req.body

            if (!email || !password) {
                return next(ApiError.badRequest('Incorrect email or password'))
            }
            const candidate = await User.findOne({where: {email}})
            if (candidate) {
                return next(ApiError.badRequest('User with such email already exists'))
            }

            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({email, role, password: hashPassword})
            const token = generateJwt(user.id, user.email, user.role)

            return res.json({token})
        } catch (e) {
            next(ApiError.badRequest(e.message))
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
            const token = generateJwt(user.id, user.email, user.role)
            res.json({token})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async check(req, res, next) {
        try {
            const token = generateJwt(req.user.id, req.user.email, req.user.role)
            return res.json({token})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new UserController()