const express = require("express");
const router = express.Router();
const Auth = require("../middlewares/Auth");
const UploadCollegePhotos = require("../Model/CollegePhotos");

//@route    POST api/admin/collegePhotos/new
//@desc     Upload new college Photos
//@access   Private
router.post("/new",Auth,async(req,res)=>{
    const{photo,date,longitude,latitude} = req.body;
    try {
        const newPhoto = new UploadCollegePhotos({photo,date,longitude,latitude});
        await newPhoto.save();
        return res.status(200).send([newPhoto]);
    } catch (error) {
        return res.status(500).send('Error Occurred :'+error.message);
    }
});



//@route    GET /api/admin/uploadCollegePhoto/all
//@desc     Get all photos
//@access   Private
router.get("/all", async(req,res)=>{
    try {
        const photos = await UploadCollegePhotos.find();
        if(!photos){
            return res.status(404).send("No Images Found");
        }
        else{
            return res.status(200).send(photos);
        }
    } catch (error) {
     return res.status(500).send('Error Occurred : '+error.message);   
    }
})

//@route    DELETE /api/admin/college/deletePhoto/:id
//@desc     Delete a photo by id
//@access   Private
router.delete("/:id",Auth,async(req,res)=>{
    try {
        const photo = await UploadCollegePhotos.findByIdAndDelete({_id : req.params.id});
        if(!photo){
            return res.status(404).send("No Photo Found");
        }
        else{
            const photos = await UploadCollegePhotos.find();
            return res.status(200).send(photos);
        }
    } catch (error) {
        return res.status(500).send('Error Occurred :'+error.message);
        
    }
});

module.exports = router;