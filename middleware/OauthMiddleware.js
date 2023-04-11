const passport = require('passport');

const authenticateGoogle = (req, res, next) => {
    passport.authenticate('google', {scope: ['email', 'profile']})(req, res, next);
};

const authenticateGoogleCallback = (req, res, next) => {
    passport.authenticate('google', (err, user) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({message: 'Authentication failed'});
        }

        req.user = user;
        next();
    })(req, res, next);
};


const authenticateFacebook = (req, res, next) => {
    passport.authenticate('facebook', {scope: ['email']})(req, res, next);
};

const authenticateFacebookCallback = (req, res, next) => {
    passport.authenticate('facebook', (err, user) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({message: 'Authentication failed'});
        }

        req.user = user;
        next();
    })(req, res, next);
};


module.exports = {
    authenticateGoogle,
    authenticateGoogleCallback,
    authenticateFacebook,
    authenticateFacebookCallback

};