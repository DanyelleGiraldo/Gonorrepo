const mongoose = require('mongoose')

const connectDB= async ()=> {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console('User database connected');
    } catch(err) {
        console.error('User database connection failed: ', err);
        process.exit(1);
    }
};

module.exports = connectDB;