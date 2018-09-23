import axios from "axios";
import { put } from "redux-saga/effects";
import ActionCreator from "../actionCreators";

export function* getStarships() {
  const data = yield axios.get("https://swapi.co/api/starships/");
  console.log(data);
  yield put(ActionCreator.loadStarshipsSuccess(data.data));
}
