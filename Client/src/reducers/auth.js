/* eslint-disable import/no-anonymous-default-export */
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_ALL_USERS,
  VIEW_STUDENT,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: true,
  message: null,
  status: null,
  user: null,
  users:null,
  student:null
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        user: payload,
        isLoading: false,
        isAuthenticated: true,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        message: payload.message,
        user: payload.newUser,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        message: payload.message,
      };
    case GET_ALL_USERS:
    
        return{
            ...state,
            isAuthenticated:true,
            isLoading :false,
            users :  payload
        }
    case VIEW_STUDENT:
      return{
        ...state,
        isAuthenticated:true,
        isLoading:false,
        student:payload
      }
    case AUTH_ERROR:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
}
