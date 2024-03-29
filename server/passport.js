const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config()

// configure passport to use the Google OAuth 2.0 strategy
try {
    passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL
        },
        function (request, accessToken, refreshToken, profile, done) {
            return done(null, profile);
        }
    ));
} catch (err) {
    console.error('Error configuring GoogleStrategy:', err);
}

// configure passport to use the Facebook OAuth 2.0 strategy
try {
    passport.use(new FacebookStrategy({
            clientID: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            callbackURL: process.env.FACEBOOK_CALLBACK_URL,
            profileFields: ['id', 'email', 'name', 'picture.type(large)']
        },
        function (accessToken, refreshToken, profile, done) {
            return done(null, profile);
        }
    ));
} catch (err) {
    console.error('Error configuring FacebookStrategy:', err);
}

module.exports = passport;