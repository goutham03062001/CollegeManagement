import axios from "axios";
import { EXAM_ANNOUNCEMENT,EXAM_ANNOUNCEMENT_ERROR } from "./types";
export const createNewExamAnnouncement = ({Title,StartDate,EndDate,Description})=> async dispatch =>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = ({Title,StartDate,EndDate,Description});
    try {
         const response  = await axios.post("/api/admin/announcement/academic/exams/new",body,config);
         dispatch({
            type : EXAM_ANNOUNCEMENT,
            payload : response.data
         })
    } catch (error) {
        dispatch({
            type : EXAM_ANNOUNCEMENT_ERROR
        })
    }
}