import {useState} from "react";
import { Button, Modal, Input ,Alert} from "antd";
import { Button as MaterialButton } from "@mui/material";
import axios from "axios";


export const AchievementComponent = () => (
    <>
      <hr />
      <div className="form-wrapper mt-5">
        <form>
          <Input type="text" className="my-2" placeholder="enter your name" />
          <Input type="date" className="my-2" placeholder="select the date" />
          <Input type="file" className="my-2" placeholder="select a file" />
          <Input
            type="text"
            className="my-2"
            placeholder="Write about this achievement"
          />
        </form>
      </div>
    </>
  );


export const ExamsComponent = () => {

    // These States are for exams

    const[Title,setExamTitle] = useState("");
    const[StartDate,setStartDate] = useState('');
    const[EndDate,setEndDate] = useState('');
    const[Description,setDescription] = useState('');
    const[alert,setAlert] = useState(null);

    const submitForm = async (e)=>{
        e.preventDefault();
        // console.log(examTitle,startDate,endDate,description);
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        const body = ({Title,StartDate,EndDate,Description});
        try {
             const response  = await axios.post("/api/admin/announcement/academic/exams/new",body,config);
             if(response.status===200){
                console.log('Submitted Successfully');
                setAlert("Your Announcement Uploaded Successfully");
             }
        } catch (error) {
            console.log('Error Occurred while submitting the announcement');
        }
    }
   return(<>
     <hr />
   {alert!=null &&(<>
    <Alert
        message = {alert}
        type="success"
        showIcon
        closable
    />
   </>)}
    <form onSubmit={(e)=>submitForm(e)} className="my-3">
    <Input type="text" placeholder="Enter the exam name" className="my-2" 
        onChange = {(e)=>setExamTitle(e.target.value)}
    />
    <Input type="date" placeholder="Enter the date" className="my-2"
    onChange = {(e)=>setStartDate(e.target.value) }

    />
    <Input type="date" placeholder="Enter your description" className="my-2" 
        onChange = {(e)=>setEndDate(e.target.value)}
    />
   
    <Input type="text" placeholder="Enter your description" className="my-2" 
        onChange = {(e)=>setDescription(e.target.value)}
    />
    <MaterialButton variant="contained" color="error" className="my-3"
    type="submit"
    >Create Now</MaterialButton>
    </form>
   </>)
  
};

