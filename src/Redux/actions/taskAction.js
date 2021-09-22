import * as actionTypes from "../contants/taskConstant";

export const getTask = (params) => {
  return {
    type: actionTypes.GET_TASK_REQUEST,
    params: params,
  };
};
export const addTask = (task, userInfo) => {
  console.log(task);
  return {
    type: actionTypes.ADD_TASK_REQUEST,
    task: task,
    userInfo: userInfo,
  };
};
export const updateTask = (task, userInfo) => {
  //console.log(task);
  return {
    type: actionTypes.UPDATE_TASK_REQUEST,
    task: task,
    userInfo: userInfo,
  };
};
export const deleteTask = (task, userInfo) => {
  //console.log(task);
  return {
    type: actionTypes.DELETE_TASK_REQUEST,
    task: task,
    userInfo: userInfo,
  };
};
