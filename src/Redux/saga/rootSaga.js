import { all, call } from "redux-saga/effects";

import userSaga from "./userSaga";
import chatSaga from "./chatSaga";
import taskSaga from "./taskSaga";
import chartSaga from "./chartSaga";
import reportSaga from "./reportSaga";
import gallerySaga from "./gallerySaga";

export default function* rootSaga() {
  yield all([
    call(userSaga),
    call(chatSaga),
    call(taskSaga),
    call(chartSaga),
    call(reportSaga),
    call(gallerySaga),
  ]);
}
