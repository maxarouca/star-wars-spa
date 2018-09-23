import { combineReducers } from 'redux'

import people from './people.js'
import planets from './planets.js'
import starships from './starships.js'

const rootReducer = combineReducers({
  people,
  planets,
  starships
})

export default rootReducer