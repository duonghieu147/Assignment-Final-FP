import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../contants/taskConstant";
import taskApi from "../../api/taskAPi";
export function* getTaskList({ params }) {
  try {
    const data = yield call(taskApi.getTasks, params);
    yield put({ type: actionTypes.GET_TASK_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: actionTypes.GET_TASK_FAIL, payload: error.message });
  }
}
export function* addTask({ task, userInfo }) {
  try {
    const data = yield call(taskApi.addTasks, task, userInfo);
    //console.log(data);
    yield put({ type: actionTypes.ADD_TASK_SUCCESS, payload: data });
    yield put({ type: actionTypes.GET_TASK_REQUEST, params: userInfo });
  } catch (err) {
    yield put({ type: actionTypes.ADD_TASK_FAIL, payload: err.message });
  }
}
export function* updateTask({ task, userInfo }) {
  try {
    const data = yield call(taskApi.updateTasks, task, userInfo);
    yield put({ type: actionTypes.UPDATE_TASK_SUCCESS, payload: data });
    yield put({ type: actionTypes.GET_TASK_REQUEST, params: userInfo });
  } catch (err) {
    yield put({ type: actionTypes.UPDATE_TASK_FAIL, payload: err });
  }
}
export function* deleteTask({ task, userInfo }) {
  try {
    const data = yield call(taskApi.deleteTasks, task, userInfo);
    yield put({ type: actionTypes.DELETE_TASK_SUCCESS, payload: data });
    yield put({ type: actionTypes.GET_TASK_REQUEST, params: userInfo });
  } catch (err) {
    yield put({ type: actionTypes.DELETE_TASK_FAIL, payload: err });
  }
}

export default function* taskSaga() {
  yield all([
    takeLatest(actionTypes.GET_TASK_REQUEST, getTaskList),
    takeLatest(actionTypes.ADD_TASK_REQUEST, addTask),
    takeLatest(actionTypes.UPDATE_TASK_REQUEST, updateTask),
    takeLatest(actionTypes.DELETE_TASK_REQUEST, deleteTask),
  ]);
}
