import axios from "axios";
import { put } from "redux-saga/effects";
import ActionCreator from "../actionCreators";

export function* getDetails(url) {
  const data = yield axios.get(url);
  yield put(ActionCreator.loadDetailsSuccess(data.data));
}
