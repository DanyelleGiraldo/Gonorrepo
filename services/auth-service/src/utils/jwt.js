const jwt = require('jsonwebtoken')

function generateToken(account){
    return jwt.sign({
        id: account.id,
        email: account.email,
        role: account.role,
    }, process.env.JWT_SECRET, {
        expiresIn:'15d'
    });
}

module.exports = {generateToken};