import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'


const sagaMiddleware = createSagaMiddleware()

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(sagas)