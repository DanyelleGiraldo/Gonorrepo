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

function verifyJwt(token){
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (err){
        return{error: 'Invalid signature or token expired'};
    }
}

module.exports = {generateToken, verifyJwt};