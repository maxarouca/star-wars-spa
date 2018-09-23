import { createReducer } from "reduxsauce";
import { Types } from "../actionCreators";

export const INITIAL_STATE = {
  data: [],
  isFetching: false,
  error: false
};

export const loadStarshipsRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    data: [],
    isFetching: true,
    error: false
  };
};

export const loadStarshipsSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    data: action.data,
    isFetching: false,
    error: false
  };
};

export const HANDLERS = {
  [Types.LOAD_STARSHIPS_REQUEST]: loadStarshipsRequest,
  [Types.LOAD_STARSHIPS_SUCCESS]: loadStarshipsSuccess
};

export default createReducer(INITIAL_STATE, HANDLERS);
