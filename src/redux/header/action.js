import { headerTypes } from './constants'

export const headerAction = title => {
	return {
		type: headerTypes.PAGE_TITLE,
		payload: title,
	}
}
