/* eslint-disable import/no-anonymous-default-export */
import {
  UPLOADED_COLLEGE_PHOTO,
  UPLOADED_PHOTO_ERROR,
  GET_ALL_PHOTOS,
  PHOTOS_ERROR,
  DELETE_PHOTO,
  DELETE_PHOTO_ERROR,
} from "../actions/types";

const initialState = {
  isLoading: true,
  collegePhoto: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPLOADED_COLLEGE_PHOTO:
    case GET_ALL_PHOTOS:
      return {
        ...state,
        isLoading: false,
        collegePhoto:payload
      };
    case DELETE_PHOTO:
        return{
            ...state,
            isLoading : false,
            collegePhoto:payload
        }
    case UPLOADED_PHOTO_ERROR:
    case PHOTOS_ERROR:
    case DELETE_PHOTO_ERROR:
      return {
        ...state,
        collegePhoto: [],
      };
    default:
      return { ...state };
  }
}
