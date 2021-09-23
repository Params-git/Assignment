const mongoose = require("mongoose");
require("dotenv").config();

new mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connection with database is successful..");
}).catch((error) => {
    console.log("Connection error...!");
})