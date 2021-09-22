import * as actionTypes from '../contants/galleryContant';

export const getGalleryList = (userInfo) => {
	return { type: actionTypes.GET_GALLERY_REQUEST, params: userInfo };
};
