/* eslint-disable import/no-anonymous-default-export */
import { SENT_ISSUE, SENT_ISSUE_ERROR } from "../actions/types";

const initialState = {
  isLoading: true,
  isSubmitted: false,
  response: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type ) {
    case SENT_ISSUE:
      return {
        ...state,
        isLoading: false,
        isSubmitted: true,
        response: payload.data,
      };
    case SENT_ISSUE_ERROR:
      return {
        ...state,
        isLoading: false,
        isSubmitted: false,
      };
    default:
      return { ...state };
  }
}
