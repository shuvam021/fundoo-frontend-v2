import { headerTypes } from './constants'

const initialState = {
	title: 'Keep',
}

const headerReducer = (state = initialState, action) => {
	switch (action.type) {
		case headerTypes.PAGE_TITLE:
			return {
				...state,
				title: action.payload,
			}

		default:
			return state
	}
}

export default headerReducer
