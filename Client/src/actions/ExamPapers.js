import axios from "axios";
import { UPLOAD_EXAM_PAPER, EXAM_ERROR, GET_ALL_PAPERS } from "./types";

//Create new exam paper
export const uploadExamPaper =
  ({ imageUrl, groupName, subjectName, year ,yearOfHappened}) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { imageUrl, groupName, subjectName, year,yearOfHappened };

    try {
      const res = await axios.post(
        "/api/admin/exam/uploadNewPhoto",
        body,
        config
      );
      dispatch({
        type: UPLOAD_EXAM_PAPER,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: EXAM_ERROR,
      });
    }
  };


  //get all exam papers

  export const getAllExamPapers = () => async (dispatch)=>{
    try {
      const res = await axios.get("/api/admin/exam/get_all_papers");
      dispatch({
        type : GET_ALL_PAPERS,
        payload : res.data
      })

    } catch (error) {
      dispatch({
        type : EXAM_ERROR
      })
    }
  }