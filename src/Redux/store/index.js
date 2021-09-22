import Cookie from "js-cookie";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { getChatListReducer } from "../reducers/chatReducer";
import { getTaskReducer } from "../reducers/taskReducer";
import { userLoginReducer } from "../reducers/userReducer";
import { getChartListReducer } from '../reducers/chartReducer';
import { getReportListReducer } from '../reducers/reportReducer';
import { getGalleryListReducer } from '../reducers/galleryReducer';
import rootSaga from "../saga/rootSaga";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  getChatList: getChatListReducer,
  getTaskList: getTaskReducer,
  getChartList:getChartListReducer,
  getReportList:getReportListReducer,
	getGalleryList: getGalleryListReducer,
});
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const userInfo = Cookie.getJSON("userInfo") || null;

const INITIAL_STATE = { userLogin: { userInfo } };

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
export default store;
