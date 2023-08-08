const jwt = require('jsonwebtoken');

const generateJwt = async (id, email, role, isActivated) => {
    return jwt.sign(
        {id, email, role, isActivated},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

module.exports = {
    generateJwt
}