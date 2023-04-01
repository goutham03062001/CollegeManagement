const mongoose = require("mongoose");

const ExamPaperSchema = new mongoose.Schema({
    imageUrl : {
        type : String,
    },
    groupName:{type : String},
    subjectName : {type: String},
    year : {type : String},
    yearOfHappened:{type:Number}
});

module.exports = ExamPaper = mongoose.model("Exam",ExamPaperSchema);