import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../contants/reportContant';
import reportApi from '../../api/reportApi';
function* AddTask(todo) {}

export function* getReportList() {
	try {
		const data = yield call(reportApi.getReport);
		yield put({ type: actionTypes.GET_REPORT_SUCCESS, payload: data });
	} catch (err) {
		yield put({ type: actionTypes.GET_REPORT_FAIL, payload: err });
	}
}

export default function* reportSaga() {
	yield all([takeLatest(actionTypes.GET_REPORT_REQUEST, getReportList)]);
}
