const express = require("express");
const router = express.Router();
const Auth = require("../middlewares/Auth");
const ContactForm = require("../Model/ContactForm");
const nodemailer = require("nodemailer");



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
        //send the mail to admin
        let transponder =nodemailer.createTransport({
            service:"gmail",
            auth:{
                user  : 'gouthamkumarpolapally@gmail.com',
                pass : 'aadqhvadmheogdfx'
            }
        });

        let mailOptions = {
            from :"gouthamkumarpolapally@gmail.com",
            to:"gouthamp0306@gmail.com",
            subject:"TEST EMAIL",
            text: "Issue raised from"+req.user.id,
            html:`
            <html>
            <head>
        <meta charset="utf-8">
        <style amp4email-boilerplate>body{visibility:hidden}</style>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
      </head>

      <body>
            <div className="container">
            <h2 style={{color:"blue"}}>ISSUE RAISED FROM OUR PLATFORM</h2>
            <p>
            ${newContactForm.problem}
            </p>
            <p>${newContactForm.description}</p>
            <p>${newContactForm.timeStamp}</p>
            <p>${newContactForm.longitude}</p>
            <p>${newContactForm.latitude}</p>
            </div>
      </body>
            
            </html>`
        }
        
        transponder.sendMail(mailOptions,(err,info)=>{
            if(err){console.log(err)}
            else{console.log("E-mail Sent Successfully",info.response)}
        })

        


        return res.status(200).send('Submitted Successfully');
    } catch (error) {
        return res.status(500).send('Error Occurred : '+error.message)
    }
})

module.exports = router;