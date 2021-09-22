import * as actionTypes from '../contants/chatContant';

export const getChatList = userInfo => {
	return { type: actionTypes.GET_CHAT_REQUEST, params: userInfo };
};

export const addChat = (userInfo, comment) => {
	return {
		type: actionTypes.ADD_CHAT_REQUEST,
		userInfo,
		comment,
	};
};
