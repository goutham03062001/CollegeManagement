const express = require("express");
const router = express.Router();
const User = require("../Model/Auth/Signup");


//@route    GET /api/admin/get_students
//@desc     return all students
//@access   Private
router.get("/get_all",async(req,res)=>{
    try {
        const users = await User.find();
        return res.json(users);
    } catch (error) {
        return res.status(500).send("Error Occurred : "+error.message);
    }
})


//@route    GET /api/admin/viewStudent/:id
//@desc     return the details of student by id
//@access   Private
router.get("/viewStudent/:id",async(req,res)=>{
    try {
        const user = await User.findOne({_id : req.params.id});
        if(!user){
         
            return res.status(404).json({message : "No User Found"})
            
        }else{
            return res.status(200).json(user)
        }
    } catch (error) {
        return res.status(500).send('Error Occurred : '+error.message)
    }
})


module.exports = router;