import * as actionTypes from '../contants/chatContant';

export const getChatListReducer = (state = { chats: [] }, action) => {
	switch (action.type) {
		case actionTypes.GET_CHAT_REQUEST:
			return { loading: true, chats: [] };
		case actionTypes.GET_CHAT_SUCCESS:
			return { loading: false, chats: action.payload };
		case actionTypes.GET_CHAT_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
