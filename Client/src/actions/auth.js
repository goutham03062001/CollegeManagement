import axios from "axios";
import { SetAuthToken } from "../utils/SetAuthToken";

import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_ALL_USERS,
  VIEW_STUDENT
} from "./types";

//load User
export const LoadUser = () => async (dispatch) => {
  if(localStorage.token){
    SetAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//registration

export const registration =
  ({ name, email, password, address }) =>
  async (dispatch) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const body = { name, email, password, address };

    try {
      const res = await axios.post("api/auth/signup", body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
        message: res.message,
      });
      dispatch(LoadUser());
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const body = { email, password };
    try {
      const res = await axios.post("/api/auth/login", body, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(LoadUser());
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };


//get all users
export const getAllUsers  = () => async dispatch=>{
    try {
        const res = await axios.get("/api/admin/get_all");
        dispatch({
            type : GET_ALL_USERS,
            payload : res.data
        })
    } catch (error) {
        dispatch({
            type : AUTH_ERROR
        })
    }
}

//view Each Student Data

export const viewStudentById = (id) => async dispatch=>{
  try {
    const res = await axios.get(`/api/admin/viewStudent/${id}`);
    dispatch({
      type : VIEW_STUDENT,
      payload : res.data
    })
  } catch (error) {
    dispatch({
      type : AUTH_ERROR
    })
  }
}