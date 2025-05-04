const Account = require('../../infrastructure/db/AccountModel');
const bcrypt = require('bcrypt');
const {generateToken} = require('../../../../utils/jwt');

async function register({email, password, role}){
    const existing = await Account.findOne({email});
    if(existing) throw new Error('Email ya existe');

    const hashed = await bcrypt.hash(password,10);
    const account = await Account.create({email, password:hashed,role});
    
    return {
        _id: account._id,
        email: account.email,
        role: account.role
    };
};

async function login({email, password}){
    const account = await Account.findOne({email});
    if(!account) throw new Error ('No se encontro la cuenta');

    const valid = await bcrypt.compare( password, account.password);
    if(!valid) throw new Error ('Credenciales erroneas');

    const token = generateToken(account);

    return token;
}

module.exports = {
    register,
    login
  };
  