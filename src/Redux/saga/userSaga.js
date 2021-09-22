import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../contants/userContant";
import Cookie from "js-cookie";
import userApi from "../../api/userApi";

export function* login({ params }) {
  try {
    const data = yield call(userApi.loginApi, params);
    console.log("data", data);
    yield put({
      type: actionTypes.USER_SIGNIN_SUCCESS,
      payload: JSON.stringify(data),
    });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (err) {
    yield put({ type: actionTypes.USER_SIGNIN_FAIL, payload: err });
  }
}

export default function* userSaga() {
  yield all([takeLatest(actionTypes.USER_SIGNIN_REQUEST, login)]);
}
