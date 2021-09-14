import * as actionTypes from '../contants/userContant';
import Cookie from 'js-cookie';

export const login = (email, password) => {
	return {
		type: actionTypes.USER_SIGNIN_REQUEST,
		params: { email, password },
	};
};

export const logout = () => {
	Cookie.remove('userInfo');
	return { type: actionTypes.USER_SIGNOUT };
};
