import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import Cookie from 'js-cookie';

import { userLoginReducer } from '../reducers/userReducer';
import { getChatListReducer } from '../reducers/chatReducer';
import { getChartsListReducer } from '../reducers/chartsReducer';
import { getReportListReducer } from '../reducers/reportReducer';

import rootSaga from '../saga/rootSaga';

const reducer = combineReducers({
	userLogin: userLoginReducer,
	getChatList: getChatListReducer,
	getChartsList:getChartsListReducer,
	getReportList:getReportListReducer,
});
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const userInfo = Cookie.getJSON('userInfo') || null;

const INITIAL_STATE = { userLogin: { userInfo } };

const store = createStore(
	reducer,
	INITIAL_STATE,
	composeWithDevTools(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(rootSaga);
export default store;
