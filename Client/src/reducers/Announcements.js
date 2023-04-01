/* eslint-disable import/no-anonymous-default-export */
import { EXAM_ANNOUNCEMENT,EXAM_ANNOUNCEMENT_ERROR } from "../actions/types";

const initialState = {
    isLoading : true,
    isCreated:false
};

export default function(state = initialState,action){

    const {payload,type} = action;
    switch(type){
        case EXAM_ANNOUNCEMENT:
            return{
                ...state,
                isLoading:false,
                isCreated:true
            }
        case EXAM_ANNOUNCEMENT_ERROR:{
            return {
                ...state,
                isLoading: false,
                isCreated:false
            }
        }

        default : return {...state}
    }
}