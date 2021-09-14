import React from 'react';
import './ChatRight.scss';
import { Icon } from '../../assets/svgs/Icon';
import Avt1 from '../../assets/images/Avt1.png';
import Avt2 from '../../assets/images/Avt2.png';
import Avt3 from '../../assets/images/Avt3.png';

export default function ChatRight() {
	return (
		<div className="chatright">
			<div className="chatright__heading">
				<div className="chatright__heading__left">
					<p className="chatright__heading__left__info">Group Info</p>
					<p className="chatright__heading__left__date">
						Create Nov 10, 2020
					</p>
				</div>
				<div className="chatright__heading__right">
					<Icon.Close />
				</div>
			</div>
			<div className="chatright__member">
				<div className="chatright__member__title">
					<p className="chatright__member__title__member">Members</p>
					<Icon.ArrowDownSmall className="chatright__member__title__icon" />
				</div>
				<div className="chatright__member__content">
					<div className="chatright__member__content__item">
						<img
							src={Avt1}
							alt="Avatar 1"
							className="chatright__member__content__item__avt"
						/>
						<p className="chatright__member__content__item__username">
							Mariuz Jaders
						</p>
						<p className="chatright__member__content__item__admin">
							Admin
						</p>
					</div>
					<div className="chatright__member__content__item">
						<p className="chatright__member__content__item__avt avtjf">
							JF
						</p>
						<p className="chatright__member__content__item__username">
							Jeremy Firow
						</p>
					</div>
					<div className="chatright__member__content__item">
						<p className="chatright__member__content__item__avt avtea">
							EA
						</p>
						<p className="chatright__member__content__item__username">
							Emil Anders
						</p>
						<p className="chatright__member__content__item__moderator">
							Moderator
						</p>
					</div>
					<div className="chatright__member__content__item">
						<img
							src={Avt2}
							alt="Avatar 2"
							className="chatright__member__content__item__avt"
						/>
						<p className="chatright__member__content__item__username">
							Markus Gavrilov
						</p>
					</div>
					<div className="chatright__member__content__item">
						<img
							src={Avt3}
							alt="Avatar 3"
							className="chatright__member__content__item__avt"
						/>
						<p className="chatright__member__content__item__username">
							Patricia Ribeiro
						</p>
					</div>
					<div className="chatright__member__content__item">
						<p className="chatright__member__content__item__avt avtvp">
							VP
						</p>
						<p className="chatright__member__content__item__username">
							Victor Pacheco
						</p>
					</div>
				</div>
			</div>
			<div className="chatright__common">
				<div className="chatright__common__title">
					<p className="chatright__common__title__common">
						Share Files
					</p>
					<Icon.ArrowRightSmall className="chatright__common__title__icon" />
				</div>
			</div>
			<div className="chatright__common">
				<div className="chatright__common__title">
					<p className="chatright__common__title__common">
						pinned messages
					</p>
					<Icon.ArrowRightSmall className="chatright__common__title__icon" />
				</div>
			</div>
			<div className="chatright__common">
				<div className="chatright__common__title">
					<p className="chatright__common__title__common">
						sharred files
					</p>
					<Icon.ArrowRightSmall className="chatright__common__title__icon" />
				</div>
			</div>
		</div>
	);
}
