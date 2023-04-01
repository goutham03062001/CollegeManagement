const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../Model/Auth/Signup");
const jwt = require("jsonwebtoken");
const  Auth = require("../middlewares/Auth");
const checkAuthToken = require("../middlewares/CheckAuthToken")
//@route    POST api/auth/signup
//@desc     Signup 
//@access   public
router.post("/signup",async(req,res)=>{

    const {name, email, password, address} = req.body;
   
    try {
        // res.send({name,email,newPass,address});
        const isExisted = await User.findOne({email});
        if(!isExisted)
        {
            const newUser = new User({name, email, password, address});
        const salt =  await  bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password,salt);
        await newUser.save();
        const payload = {
            user : { id : newUser.id}
        }
        jwt.sign(payload,process.env.JWT_Secret,{expiresIn : 36000},(err,token)=>{
            if(err){ console.log('error : ',err.message)}
            if(token){
                return res.json({token});
            }
        })
        
       
        }
        else{
            return res.json({message : "This user is already existed"});
        }
        
    } catch (error) {
        res.send('Error Occured');
        console.log("Error Occured", error);
    }
    

});


// @route  POST /api/auth/login
// @desc   Login Route
// @access Public

router.post("/login",async(req,res)=>{

    // 1. Find the user with email and cross the password
    const { email, password} = req.body;
    const isExisted = await User.findOne({email});
    if(isExisted){
        //check for the password
        // console.log(isExisted.password);
       bcrypt.compare(password, isExisted.password ,(err,data)=>{
        if(err) { throw err;}
        if(data){ 
            const payload = {
                user : { id : isExisted.id}
            }
            jwt.sign(payload,process.env.JWT_Secret,{expiresIn : 36000},(err,token)=>{
                if(err){ console.log('error : ',err.message)}
                if(token){
                  const decoded_token =  jwt.verify(token,process.env.JWT_Secret)
                    return res.json({token});
                }
            })
        }
        if(!data){ return res.send("passwords do not match")}
       })
    }
    else{
        res.send("There is no such email found");
    }
})



// @route  GET /api/auth/
// @desc   return current user details
// @access Private
router.get("/",Auth,async(req,res)=>{
    try {
        const user = await User.findOne({_id : req.user.id});
        if(!user){
            return res.send('No User Found with provided id');
        }
        else{
            return res.send(user);
        }
    } catch (error) {
        return res.send('Error Occurred : '+error.message);
    }
})


module.exports = router;