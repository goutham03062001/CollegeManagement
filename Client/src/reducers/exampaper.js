/* eslint-disable import/no-anonymous-default-export */
import { UPLOAD_EXAM_PAPER,EXAM_ERROR, GET_ALL_PAPERS } from "../actions/types";

const initialState = {
    isLoading : true,
    paper:null,
    papers:null,

}

export default function(state = initialState, action){
    const {type,payload } = action;

    switch(type){
        case UPLOAD_EXAM_PAPER:
            return{
                ...state,
                isLoading : false,
                paper : payload
            }
        case GET_ALL_PAPERS:
            return{
                ...state,
                isLoading:false,
                papers:payload
            }
        case EXAM_ERROR:
            return{
                ...state,
                isLoading : true,
                paper : null
            }
        default : return state
    }
}