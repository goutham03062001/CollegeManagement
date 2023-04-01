const express = require("express");
const router = express.Router();
const ExamPaper = require("../Model/ExamPapers");

//@route    GET /api/admin/exams/get_all_papers
//@desc     return all the exam papers
//@access   Private
router.get("/get_all_papers",async(req,res)=>{
    try {
        const papers = await ExamPaper.find();
        if(!papers){
            return res.status(404).json({message : "No Papers Found"});
        }
        else{
            return res.status(200).send(papers);
        }
    } catch (error) {
        res.status(500).send('Error Occurred : '+error.message);
    }
});

//@route    POST /api/admin/exams/uploadPaper
//@desc     upload a new exam paper
//@access   Private
router.post("/uploadNewPhoto", async(req,res)=>{
    const {groupName,subjectName,year,imageUrl,yearOfHappened} = req.body;
    try {
        // const imageUrl = req.body.imageUrl;
        const newPhoto = new ExamPaper({imageUrl,groupName,subjectName,year,yearOfHappened});
        await newPhoto.save();

        return res.json(newPhoto);
    } catch (error) {
        res.status(500).send('Error Occurred :'+error.message);
    }
});


//@route    DELETE /api/admin/exams/:id
//@desc     delete a paper id
//@access   Private
router.delete("/:id",async(req,res)=>{
    try {
        const paper = await ExamPaper.findOne({_id : req.params.id});
        if(!paper){
            return res.status(404).json({message : "No Paper Found"});
        }else{
            return res.status(200).send(paper);
        }

    } catch (error) {
     return res.status(500).send('Error Occurred : '+error.message)   
    }
})
module.exports = router;