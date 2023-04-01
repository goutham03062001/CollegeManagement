const mongoose = require("mongoose");
const AnnouncementSchema = new mongoose.Schema({
    Title :{type : String},
    StartDate : {type : Date},
    EndDate : {type: Date},
    Description:{type : String}
});

module.exports = Announcement = mongoose.model("Announcements",AnnouncementSchema);