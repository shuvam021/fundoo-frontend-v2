import { combineReducers } from 'redux'
import headerReducer from './header/reducer'

const rootReducer = combineReducers({
	headers: headerReducer,
})

export default rootReducer
