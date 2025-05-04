const { default: mongoose } = require("mongoose")

mongoose.connect(process.env.MONGODB_URL)
    .then(()=> console.log("Connected"))
    .catch(err=> console.log("Not connected: ", err));

module.exports= mongoose;