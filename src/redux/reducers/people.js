import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
  data: {},
  isFetching: false,
  error: false
}

export const loadPeoplesRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    data: {},
    isFetching: true,
    error: false
  }
}

export const loadPeoplesSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    data: action.data,
    isFetching: false,
    error: false
  }
}

export const HANDLERS = {
  [Types.LOAD_PEOPLES_REQUEST]: loadPeoplesRequest,
  [Types.LOAD_PEOPLES_SUCCESS]: loadPeoplesSuccess,
}

export default createReducer(INITIAL_STATE, HANDLERS)
