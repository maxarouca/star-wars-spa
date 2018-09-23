import axios from 'axios'
import { put } from "redux-saga/effects";
import ActionCreator from "../actionCreators";


export function* getPersonagens() {
  const data = yield axios.get('https://swapi.co/api/people/')
  console.log(data)
  yield put(ActionCreator.loadPeoplesSuccess(data.data))
}
