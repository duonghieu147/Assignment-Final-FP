import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../contants/reportContant";
import reportApi from "../../api/reportApi";

export function* getReportList({ params }) {
  try {
    const data = yield call(reportApi.getReport, params);
    yield put({ type: actionTypes.GET_REPORT_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: actionTypes.GET_REPORT_FAIL, payload: err.message });
  }
}

export default function* reportSaga() {
  yield all([takeLatest(actionTypes.GET_REPORT_REQUEST, getReportList)]);
}
