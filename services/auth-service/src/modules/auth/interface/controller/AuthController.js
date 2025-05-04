const authService = require('../../application/services/AuthService');


async function register (req, res){
    try{
        const account = await authService.register(req.body);
        res.status(201).json(account);
    } catch (err){
        res.status(400).json({error: err.message});
    }
};

async function login (req, res) {
    try{
        const account = await authService.login(req.body);
        res.status(200).json(account);
    } catch (err){
        res.status(400).json({error: err.message});
    }
};

module.exports = { register, login };
