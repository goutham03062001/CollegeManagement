import {
  UPLOADED_COLLEGE_PHOTO,
  UPLOADED_PHOTO_ERROR,
  GET_ALL_PHOTOS,
  PHOTOS_ERROR,
  DELETE_PHOTO,
  DELETE_PHOTO_ERROR
} from "./types";
import axios from "axios";

//upload new college photo
export const UploadCollegePhoto =
  ({ photo, date, longitude, latitude }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = { photo, date, longitude, latitude };

    try {
      const res = await axios.post(
        "/api/admin/UploadCollegePhoto/new",
        body,
        config
      );
      dispatch({
        type: UPLOADED_COLLEGE_PHOTO,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: UPLOADED_PHOTO_ERROR,
      });
    }
  };

//get all college photos
export const getAllPhotos = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/admin/UploadCollegePhoto/all");
    dispatch({
        type : GET_ALL_PHOTOS,
        payload : res.data
    })
  } catch (error) {
    dispatch({
        type : PHOTOS_ERROR
    })
  }
};


//delete a college photo by id
export const deleteCollegePhoto = ({id}) => async (dispatch) =>{

    try {
      const response = await axios.delete(`/api/admin/UploadCollegePhoto/${id}`);
      dispatch({
        type : DELETE_PHOTO,
        payload : response.data
      })
    } catch (error) {
      dispatch({
        type : DELETE_PHOTO_ERROR
      })
    }
}