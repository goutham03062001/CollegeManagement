const express = require("express");
const router = express.Router();
const Announcement = require("../Model/Announcements");

//@route    POST /announcement/academic/exams/new
//@desc     create a new announcement about exams
//@access   Private
router.post("/academic/exams/new",async(req,res)=>{
    const{Title,StartDate,EndDate,Description} = req.body;
    try {
        const announcement = new Announcement({Title,StartDate,EndDate,Description});
        await announcement.save();
        return res.status(200).send(announcement);
    } catch (error) {
        return res.status(500).send('Internal Error : '+error.message)
    }
});


//@route    GET /announcement/academic/exams/:id
//@desc     get an exam with id
//@access   Private
router.get("/academic/exams/:id",async(req,res)=>{
    // const{Title,StartDate,EndDate,Description} = req.body;
    try {
        // const Announcement = new Announcement({Title,StartDate,EndDate,Description});
        // await Announcement.save();
        const announcement = await Announcement.findOne({_id : req.params.id});
        return res.status(200).send(announcement);
        // return res.status(200).send(Announcement);
    } catch (error) {
        return res.status(500).send('Internal Error : '+error.message)
    }
});


//@route    DELETE /announcement/academic/exams/:id
//@desc     Delete an announcement with id
//@access   Private
router.delete("/academic/exams/:id",async(req,res)=>{
    // const{Title,StartDate,EndDate,Description} = req.body;
    try {
        // const Announcement = new Announcement({Title,StartDate,EndDate,Description});
        const announcement = await Announcement.findOneAndDelete({_id : req.params.id});
        await Announcement.save();
        // return res.status(200).send(Announcement);
        return res.status(200).send('Announcement Deleted');
    } catch (error) {
        return res.status(500).send('Internal Error : '+error.message)
    }
});


module.exports = router;