import axiosClient from './axiosClient';
import Cookie from 'js-cookie';
const userInfo = Cookie.getJSON('userInfo') || null;
async function getCharts() {
	const url = '/api/charts';
	return await axiosClient.get(url, {
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}

const chartsApi = {
	getCharts,
};
export default chartsApi;
