const mongoose = require("mongoose");
const ContactSchema = new mongoose.Schema({

    problem :{type : String},
    description:{type : String},
    timeStamp : {type : Date},
    latitude : {type : Number},
    longitude : {type : Number}
});

module.exports = Contact = mongoose.model("contact",ContactSchema);