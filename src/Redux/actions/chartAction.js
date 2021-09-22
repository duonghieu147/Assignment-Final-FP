import * as actionTypes from "../contants/chartContant";

export const getChart = (params) => {
  console.log(params);
  return {
    type: actionTypes.GET_CHART_REQUEST,
    params: params,
  };
};
