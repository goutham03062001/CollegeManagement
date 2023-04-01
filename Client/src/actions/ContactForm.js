import {SENT_ISSUE,SENT_ISSUE_ERROR} from "./types";
import axios from "axios";

export const sendIssue = ({problem,description,latitude,longitude}) => async dispatch=>{
   
    const config = {
       headers:{
        'Content-Type':'application/json'
       }
    }
    const body = ({problem,description,latitude,longitude});

    try {
        const response = await axios.post('/api/admin/Contact',body,config);
        dispatch({
            type : SENT_ISSUE,
            payload : response.data
        })
    } catch (error) {
        dispatch({
            type : SENT_ISSUE_ERROR
        })
    }
}