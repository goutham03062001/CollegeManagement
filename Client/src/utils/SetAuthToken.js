import axios from "axios";

export const SetAuthToken = (token) =>{
    if(token){
        axios.defaults.headers.common['x-auth-token'] = token;
        localStorage.setItem('token',token);
    }
    else{
        delete axios.defaults.headers.common['x-auth-token'];
        localStorage.removeItem('token',token);
    }
}