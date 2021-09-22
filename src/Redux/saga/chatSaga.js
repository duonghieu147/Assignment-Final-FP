import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../contants/chatContant';
import chatApi from '../../api/chatApi';

export function* getChatList({ params }) {
	try {
		const data = yield call(chatApi.getChats, params);
		yield put({ type: actionTypes.GET_CHAT_SUCCESS, payload: data });
	} catch (err) {
		yield put({ type: actionTypes.GET_CHAT_FAIL, payload: err.message });
	}
}

export function* addChat({ userInfo, comment }) {
	try {
		const data = yield call(chatApi.addNewChat, userInfo, comment);
		yield put({
			type: actionTypes.ADD_CHAT_SUCCESS,
			payload: data,
		});
		yield put({ type: actionTypes.GET_CHAT_REQUEST, params: userInfo });
	} catch (err) {
		yield put({ type: actionTypes.ADD_CHAT_FAIL, payload: err.message });
	}
}

export default function* chatSaga() {
	yield all([
		takeLatest(actionTypes.GET_CHAT_REQUEST, getChatList),
		takeLatest(actionTypes.ADD_CHAT_REQUEST, addChat),
	]);
}
