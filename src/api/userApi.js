import axiosClient from '../api/axiosClient';
async function loginApi(data) {
	return await axiosClient.post('/login', data);
}

const userApi = {
	loginApi,
};

export default userApi;
