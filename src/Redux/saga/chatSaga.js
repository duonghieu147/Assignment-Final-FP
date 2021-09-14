import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../contants/chatContant';
import chatApi from '../../api/chatApi';
function* AddTask(todo) {}

export function* getChatList() {
	try {
		const data = yield call(chatApi.getChats);
		yield put({ type: actionTypes.GET_CHAT_SUCCESS, payload: data });
	} catch (err) {
		yield put({ type: actionTypes.GET_CHAT_FAIL, payload: err });
	}
}

export default function* chatSaga() {
	yield all([takeLatest(actionTypes.GET_CHAT_REQUEST, getChatList)]);
}
