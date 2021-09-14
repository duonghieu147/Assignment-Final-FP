import * as actionTypes from '../contants/reportContant';

export const getReportListReducer = (state = { report: [] }, action) => {
	switch (action.type) {
		case actionTypes.GET_REPORT_REQUEST:
			return { loading: true, report: [] };
		case actionTypes.GET_REPORT_SUCCESS:
			return { loading: false, report: action.payload };
		case actionTypes.GET_REPORT_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
