const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://ValueTech:ValueTech@cluster0.afwisns.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true})
.then((succ)=>{console.log("Connected to db")})
.catch((err)=>{console.log("connection error : ",err.message)})
// mongoose.set("stictQuery",false);