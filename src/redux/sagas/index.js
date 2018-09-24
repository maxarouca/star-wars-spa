import { takeLatest, all } from "redux-saga/effects";
import { getPersonagens } from "./getPersonagens.js";
import { getPlanets } from "./getPlanets.js";
import { getStarships } from "./getStarships.js";
import { Types } from '../actionCreators'
import { getDetails } from "./getDetails.js";


export default function* rootSaga() {
  console.log('root saga')
  yield all([
    takeLatest(Types.LOAD_PEOPLES_REQUEST, getPersonagens),
    takeLatest(Types.LOAD_PLANETS_REQUEST, getPlanets),
    takeLatest(Types.LOAD_STARSHIPS_REQUEST, getStarships),
    takeLatest(Types.LOAD_DETAILS_REQUEST, getDetails),
  ])
}
