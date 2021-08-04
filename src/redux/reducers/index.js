// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from 'redux'

// Reducers
import todoReducer from './todo-reducer'

export default combineReducers({
	todoReducer,
	// Here you can registering another reducers.
})
