import * as actionTypes from "../contants/chartContant";
const initialState = {
  charts: {},
  loading: false,
  error: null,
};
export const getChartListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CHART_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_CHART_SUCCESS:
      return { ...state, charts: action.payload };
    case actionTypes.GET_CHART_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
