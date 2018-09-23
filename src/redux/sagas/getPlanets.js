import axios from "axios";
import { put } from "redux-saga/effects";
import ActionCreator from "../actionCreators";

export function* getPlanets() {
  const data = yield axios.get("https://swapi.co/api/planets/");
  console.log(data);
  yield put(ActionCreator.loadPlanetsSuccess(data.data));
}
