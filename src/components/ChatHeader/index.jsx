import React from 'react';
import './ChatHeader.scss';
import { Icon } from '../../assets/svgs/Icon';

export default function ChatHeader() {
	return (
		<div className="chatheader">
			<div className="chatheader__left">
				<div className="chatheader__left__room">
					# <p className="chatheader__left__room__p"> Pelican Room</p>
				</div>
				<div className="chatheader__left__group">
					<p className="chatheader__left__group__member">6 members</p>
					<Icon.Plus className="chatheader__left__group__icon" />
					<p className="chatheader__left__group__add">Add member</p>
				</div>
			</div>
			<div className="chatheader__right">
				<Icon.PinChat className="chatheader__right__icon" />
				<Icon.Help className="chatheader__right__icon" />
				<Icon.Line className="chatheader__right__icon" />
				<Icon.Star className="chatheader__right__icon" />
				<Icon.Setting className="chatheader__right__icon" />
				<Icon.ThreeDot className="chatheader__right__icon" />
			</div>
		</div>
	);
}
