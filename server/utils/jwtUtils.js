const jwt = require('jsonwebtoken');

const generateJwt = async (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

module.exports = {
    generateJwt
}