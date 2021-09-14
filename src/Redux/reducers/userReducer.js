import * as actionTypes from '../contants/userContant';

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.USER_SIGNIN_REQUEST:
			return { loading: true };
		case actionTypes.USER_SIGNIN_SUCCESS:
			return { loading: false, userInfo: JSON.parse(action.payload) };
		case actionTypes.USER_SIGNIN_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
