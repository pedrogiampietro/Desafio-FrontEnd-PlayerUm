import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxPromise from 'redux-promise'

import AccountReducer from './reducers/AccountReducer'
import PlaceReducer from './reducers/PlaceReducer'

const reducers = combineReducers({
  account: AccountReducer,
  place: PlaceReducer,
})

const store = createStore(reducers, applyMiddleware(ReduxPromise))

export default store
