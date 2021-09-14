import * as actionTypes from '../contants/chartsContant';

export const getChartsListReducer = (state = { charts: [] }, action) => {
	switch (action.type) {
		case actionTypes.GET_CHARTS_REQUEST:
			return { loading: true, charts: [] };
		case actionTypes.GET_CHARTS_SUCCESS:
			return { loading: false, charts: action.payload };
		case actionTypes.GET_CHARTS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
