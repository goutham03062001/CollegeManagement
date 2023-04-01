const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({path  : "./config.env"});
const Auth = require("./routers/Auth");
const Admin = require("./routers/Students");
const ExamPaper = require("./routers/ExamPapers");
const ContactForm = require("./routers/Contact");
const Announcement = require("./routers/Announcements");
const port = process.env.PORT || 5000;
const conn = require("./connections/conn");
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routers
app.use("/api/auth",Auth);
app.use("/api/admin",Admin);
app.use("/api/admin/exam",ExamPaper);
app.use("/api/admin/Contact",ContactForm);
app.use("/api/admin/announcement",Announcement);

app.listen(port,()=>{console.log("You are working on : ",port)})