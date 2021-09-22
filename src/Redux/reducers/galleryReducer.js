import * as actionTypes from '../contants/galleryContant';

export const getGalleryListReducer = (state = { galleries: [] }, action) => {
	switch (action.type) {
		case actionTypes.GET_GALLERY_REQUEST:
			return { loading: true, galleries: [] };
		case actionTypes.GET_GALLERY_SUCCESS:
			return { loading: false, galleries: action.payload };
		case actionTypes.GET_GALLERY_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
