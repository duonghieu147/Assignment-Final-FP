import axiosClient from './axiosClient';
import Cookie from 'js-cookie';
const userInfo = Cookie.getJSON('userInfo') || null;
const url = '/api/posts';
async function getChats(params) {
	return await axiosClient.get(url, {
		headers: { Authorization: `Bearer ${params.token}` },
	});
}

async function addNewChat(userInfo, comment) {
	return await axiosClient.post(
		url,
		{ name: userInfo.name, comment },
		{
			headers: { Authorization: `Bearer ${userInfo.token}` },
		},
	);
}

const chatApi = {
	getChats,
	addNewChat,
};
export default chatApi;
