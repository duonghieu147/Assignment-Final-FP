import React from 'react';
import { Icon } from '../../assets/svgs/Icon';
import Avt1 from '../../assets/images/Avt1.png';
import Avt2 from '../../assets/images/Avt2.png';
import './ChatLeft.scss';

export default function ChatLeft() {
	return (
		<div className="chatleft">
			<div className="chatleft__search">
				<Icon.Search className="chatleft__search__icon" />
				<input
					type="search"
					id="search"
					name="search"
					placeholder="Search"
					className="chatleft__search__input"
				/>
			</div>
			<div className="chatleft__fav">
				<div className="chatleft__fav__heading">
					<p className="chatleft__fav__heading__title">Favorites</p>
					<Icon.Plus className="chatleft__fav__heading__icon" />
				</div>
				<div className="chatleft__fav__content"># Pelican</div>
			</div>
			<div className="chatleft__message">
				<div className="chatleft__message__heading">
					<p className="chatleft__message__heading__title">
						Direct messages
					</p>
					<Icon.Plus className="chatleft__message__heading__icon" />
				</div>
				<div className="chatleft__message__content">
					<div className="chatleft__message__content__item">
						<p className="chatleft__message__content__item__avt avtjf">
							JF
						</p>
						<p className="chatleft__message__content__item__username">
							Jeremy Firow
						</p>
					</div>
					<div className="chatleft__message__content__item">
						<img
							src={Avt1}
							alt="Avatar 1"
							className="chatleft__message__content__item__avt"
						/>
						<p className="chatleft__message__content__item__username has__number">
							Mariuz Jaders
						</p>
						<p className="chatleft__message__content__item__number">
							34
						</p>
					</div>
					<div className="chatleft__message__content__item">
						<p className="chatleft__message__content__item__avt avtea">
							EA
						</p>
						<p className="chatleft__message__content__item__username">
							Emil Anders
						</p>
					</div>
					<div className="chatleft__message__content__item">
						<img
							src={Avt2}
							alt="Avatar 2"
							className="chatleft__message__content__item__avt"
						/>
						<p className="chatleft__message__content__item__username">
							Markus Gavrilov
						</p>
					</div>
				</div>
			</div>
			<div className="chatleft__group">
				<div className="chatleft__group__heading">
					<p className="chatleft__group__heading__title">Groups</p>
					<Icon.Plus className="chatleft__group__heading__icon" />
				</div>
				<div className="chatleft__group__content">
					<div className="chatleft__group__content__item">
						<p className="chatleft__group__content__item__title">
							# Crypto
						</p>
					</div>
					<div className="chatleft__group__content__item">
						<p className="chatleft__group__content__item__title">
							# Futures
						</p>
					</div>
					<div className="chatleft__group__content__item">
						<p className="chatleft__group__content__item__title has__number">
							# Finance
						</p>
						<p className="chatleft__group__content__item__number">
							12
						</p>
					</div>
					<div className="chatleft__group__content__item">
						<p className="chatleft__group__content__item__title">
							# Stocktalk Germany
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
