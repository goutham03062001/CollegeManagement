const express = require("express");
const router = express.Router();
const Auth = require("../middlewares/Auth");
const ContactForm = require("../Model/ContactForm");

//@router      POST /api/contact
//@desc        post a problem 
//@access      private
router.post("/",Auth,async(req,res)=>{
    try {
        const {problem,description,latitude,longitude} = req.body;
        const date = new Date();
        const timeStamp = date.getTime();
        const newContactForm = new ContactForm({problem,description,timeStamp,latitude,longitude});
        await newContactForm.save();
        return res.status(200).send('Submitted Successfully');
    } catch (error) {
        return res.status(500).send('Error Occurred : '+error.message)
    }
})

module.exports = router;