import { createReducer } from "reduxsauce";
import { Types } from "../actionCreators";

export const INITIAL_STATE = {
  data: [],
  isFetching: false,
  error: false
};

export const loadPlanetsRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    data: [],
    isFetching: true,
    error: false
  };
};

export const loadPlanetsSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    data: action.data,
    isFetching: false,
    error: false
  };
};

export const HANDLERS = {
  [Types.LOAD_PLANETS_REQUEST]: loadPlanetsRequest,
  [Types.LOAD_PLANETS_SUCCESS]: loadPlanetsSuccess
};

export default createReducer(INITIAL_STATE, HANDLERS);
