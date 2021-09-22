import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../contants/galleryContant';
import galleryApi from '../../api/galleryApi';
import Cookie from 'js-cookie';
export function* getGalleryList({params}) {
	try {
		const data = yield call(galleryApi.getGalleries, params);
		yield put({ type: actionTypes.GET_GALLERY_SUCCESS, payload: data });
		Cookie.set('galleryList', JSON.stringify(data))
	} catch (err) {
		yield put({ type: actionTypes.GET_GALLERY_FAIL, payload: err });
	}
}

export default function* gallerySaga() {
	yield all([takeLatest(actionTypes.GET_GALLERY_REQUEST, getGalleryList)]);
}
