import axiosClient from './axiosClient';
import Cookie from 'js-cookie';
const userInfo = Cookie.getJSON('userInfo') || null;
async function getReport() {
	const url = '/api/activities';
	return await axiosClient.get(url, {
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}

const reportApi = {
	getReport,
};
export default reportApi;
