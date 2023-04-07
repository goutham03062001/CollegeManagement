const mongoose = require("mongoose");
const CollegePhotosSchema = new mongoose.Schema({
    photo : {type : String},
    date : {type : Date},
    longitude : {type : Number},
    latitude : {type : Number}
});

module.exports = CollegePhoto = mongoose.model("CollegePhotos",CollegePhotosSchema);