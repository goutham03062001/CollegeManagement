const mongoose = require("mongoose");
const ToppersSchema = new mongoose.Schema({
    GroupName : {type : String},
    AcademicYear : {type : Number},
    Class : {type : String}, //first year or second year
    Photos:[{type : String}] //array of photos
});

module.exports = Toppers = mongoose.model("Toppers",ToppersSchema);