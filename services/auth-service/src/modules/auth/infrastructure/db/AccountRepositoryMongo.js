const AccountModel = require('./AccountModel');
const AccountRepository = require('../../domain/repositories/account.repository')

class AccountRepositoryMongo extends AccountRepository {
    async create(account){
        return await AccountModel.create(account);
    }

    async findByEmail(email){
        return await AccountModel.find({email});
    }
}

module.exports = AccountRepositoryMongo;