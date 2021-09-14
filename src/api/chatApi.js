import axiosClient from './axiosClient';
import Cookie from 'js-cookie';
const userInfo = Cookie.getJSON('userInfo') || null;
async function getChats() {
	const url = '/api/posts';
	return await axiosClient.get(url, {
		headers: { Authorization: `Bearer ${userInfo.token}` },
	});
}

const chatApi = {
	getChats,
};
export default chatApi;
