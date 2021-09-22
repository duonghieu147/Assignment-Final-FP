import axiosClient from './axiosClient';
async function getGalleries(params) {
	const url = '/api/galleries';
	return await axiosClient.get(url, {
		headers: { Authorization: `Bearer ${params.token}` },
	});
}

const galleryApi = {
	getGalleries,
};
export default galleryApi;
