import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../contants/chartsContant';
import chartsApi from '../../api/chartsApi';
function* AddTask(todo) {}

export function* getChartsList() {
	try {
		const data = yield call(chartsApi.getCharts);
		yield put({ type: actionTypes.GET_CHARTS_SUCCESS, payload: data });
	} catch (err) {
		yield put({ type: actionTypes.GET_CHARTS_FAIL, payload: err });
	}
}

export default function* chartsSaga() {
	yield all([takeLatest(actionTypes.GET_CHARTS_REQUEST, getChartsList)]);
}
