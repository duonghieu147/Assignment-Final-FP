import { all, call } from 'redux-saga/effects';

import userSaga from './userSaga';
import chatSaga from './chatSaga';
import chartsSaga from './chartsSaga';
import reportSaga from './reportSaga';


export default function* rootSaga() {
	yield all([call(userSaga), call(chatSaga),call(chartsSaga),call(reportSaga)]);
}
