import * as actionTypes from "../contants/taskConstant";
const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

export const getTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TASK_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_TASK_SUCCESS:
      return { ...state, loading: false, tasks: action.payload };
    case actionTypes.GET_TASK_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const addTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK_REQUEST:
      return { loading: true };
    case actionTypes.ADD_TASK_SUCCESS:
      return { loading: false, success: true };
    case actionTypes.ADD_TASK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const editTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TASK_REQUEST:
      return { loading: true };
    case actionTypes.UPDATE_TASK_SUCCESS:
      return { loading: false, success: true };
    case actionTypes.UPDATE_TASK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const deleteTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.DELETE_TASK_REQUEST:
      return { loading: true };
    case actionTypes.DELETE_TASK_SUCCESS:
      return { loading: false, success: true };
    case actionTypes.DELETE_TASK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
