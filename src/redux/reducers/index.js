import { combineReducers } from 'redux'

import people from './people.js'
import planets from './planets.js'
import starships from './starships.js'
import details from './details.js'

const rootReducer = combineReducers({
  people,
  planets,
  starships,
  details
})

export default rootReducer