import { createReducer } from "reduxsauce";
import { Types } from "../actionCreators";

export const INITIAL_STATE = {
  data: {},
  isFetching: false,
  error: false
};

export const loadDetailsRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    data: {},
    isFetching: true,
    error: false
  };
};

export const loadDetailsSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    data: action.data,
    isFetching: false,
    error: false
  };
};

export const HANDLERS = {
  [Types.LOAD_DETAILS_REQUEST]: loadDetailsRequest,
  [Types.LOAD_DETAILS_SUCCESS]: loadDetailsSuccess
};

export default createReducer(INITIAL_STATE, HANDLERS);
