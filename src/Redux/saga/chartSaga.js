import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../contants/chartContant";
import chartsApi from "../../api/chartApi";

export function* getChartList({ params }) {
  console.log(params);
  try {
    const data = yield call(chartsApi.getCharts, params);
    console.log(data);
    yield put({ type: actionTypes.GET_CHART_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: actionTypes.GET_CHART_FAIL, payload: err.message });
  }
}

export default function* chartSaga() {
  yield all([takeLatest(actionTypes.GET_CHART_REQUEST, getChartList)]);
}
