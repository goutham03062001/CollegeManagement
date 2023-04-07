import { combineReducers } from "redux";
// import alert from './alert';
import auth from "./auth";
import exampaper from "./exampaper";
import Contact from "./Contact";
import Announcements from "./Announcements";
// import profile from "./profile";
// import posts from "./posts"
import UploadCollegePhotos from "./UploadCollegePhotos";
export default combineReducers({
    auth,exampaper,Contact,Announcements,UploadCollegePhotos
});