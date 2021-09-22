import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListCard from '../../components/ListCard';
import { getGalleryList as listGallery } from '../../Redux/actions/galleryAction';
import Cookie from 'js-cookie';
import './Gallery.scss';
import Header from '../../components/Header/index'
import SideBar from '../../components/SideBar/index'
const galleryList = Cookie.getJSON('galleryList') || null;

export default function Gallery() {
	const dispatch = useDispatch();
	const [favorite, setFavorite] = useState(galleryList?.favorite);
	const [categories, setCategories] = useState(galleryList?.categories);

	const [listPin, setListPin] = useState([]);

	const userLogin = useSelector(state => state.userLogin);
	const { userInfo } = userLogin;

	let index2;

	const removeItem = (itemId, id) => {
		const newCate = [...categories];
		const index = newCate.findIndex(x => x.id === id);
		index2 = newCate[index].data.findIndex(x => x.id === itemId);
		newCate[index].data.splice(index2, 1);
		setCategories(newCate);
	};

	const handlePin = (item, id) => {
		if (item.isPin) {
            if (!item.isFavorite) {
                item.isPin = false;
                const newCate = [...categories];
                const index = newCate.findIndex(x => x.id === item.categoryId);
                newCate[index].data.splice(index2, 0, item);
                setCategories(newCate);
                const newFav = { ...favorite };
                const pos = newFav.data.findIndex(x => x.id === item.id);
                newFav.data.splice(pos, 1);
                const newPin = [...newFav.data];
                setListPin(newPin);
                setFavorite(newFav);
            } else {
                const newFav = { ...favorite };
                const index = newFav.data.findIndex(x => x.id === item.id);
                newFav.data[index].isPin = false;
                setFavorite(newFav);
            }
        }
		else {
            if (!item.isFavorite) {
                item.isPin = true;
                const newFav = { ...favorite };
                newFav.data.unshift(item);
                setFavorite(newFav);
                const newPin = [...newFav.data];
                setListPin(newPin);
                removeItem(item.id, id);
            } else {
                const newFav = { ...favorite };
                const index = newFav.data.findIndex(x => x.id === item.id);
                newFav.data[index].isPin = true;
                setFavorite(newFav);
            }
        }
	};

	const handleStart = (item, id) => {
		if (item.isFavorite) {
            if (!item.isPin) {
                item.isPin = false;
                item.isFavorite = false;
                const newCate = [...categories];
                const index = newCate.findIndex(x => x.id === item.categoryId);
                newCate[index].data.splice(index2, 0, item);
                setCategories(newCate);
                const newFav = { ...favorite };
                const pos = newFav.data.findIndex(x => x.id === item.id);
                newFav.data.splice(pos, 1);
                const newPin = [...newFav.data];

                setListPin(newPin);
                console.log('listpin4', sortBy(newPin, 'isPin'));
                setFavorite(newFav);
            } else {
                const newFav = { ...favorite };
                const index = newFav.data.findIndex(x => x.id === item.id);
                newFav.data[index].isFavorite = false;
                setFavorite(newFav);
            }
        }
		
		else {
            if (!item.isPin) {
                item.isPin = false;
                item.isFavorite = true;
                const newFav = { ...favorite };
                newFav.data.push(item);
                setFavorite(newFav);
                const newPin = [...newFav.data];
                setListPin(newPin);
                console.log('listpin4', sortBy(newPin, 'isPin'));
                removeItem(item.id, id);
            } else {
                const newFav = { ...favorite };
                const index = newFav.data.findIndex(x => x.id === item.id);
                newFav.data[index].isFavorite = true;
                setFavorite(newFav);
            }
        }
	};

	useEffect(() => {
		dispatch(listGallery(userInfo));
	}, [dispatch]);
	const sortBy = (arr, k) =>
        arr.concat().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0));
	return (
		<>
		<Header/>
		<SideBar/>
		<div className="gallery">
			<div className="gallery__wrapper">
				<div className="gallery__favorites">
					<h1>Favorites</h1>
					{favorite && (
						<ListCard
							data={favorite.data}
							handlePin={handlePin}
							handleStart={handleStart}
							listPin={listPin}
							id={favorite.id}
						/>
					)}
				</div>
				<div className="gallery__category">
					{categories &&
						categories.map(item => (
							<div key={item.id}>
								<h1>{item.name}</h1>
								<ListCard
									listPin={listPin}
									id={item.id}
									data={sortBy(item.data, 'id')}
									handlePin={handlePin}
									handleStart={handleStart}
								/>
							</div>
						))}
				</div>
			</div>
		</div>
		</>
	);
}
