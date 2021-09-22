import * as actionTypes from "../contants/reportContant";

export const getReportList = (params) => {
  return { type: actionTypes.GET_REPORT_REQUEST, params: params };
};
