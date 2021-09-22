import { Row } from 'antd';
import React, { useState } from 'react';
import Card from '../Card';
import './ListCard.scss';
import Cookie from 'js-cookie';

export default function ListCard(props) {
	const { data, handlePin, handleStart, id, listPin } = props;

	return (
		<div className="listCard">
			{data &&
				data.map(item => (
					<Card
						listPin={listPin}
						key={item.id}
						data={item}
						handlePin={handlePin}
						handleStart={handleStart}
						id={id}
					/>
				))}
		</div>
	);
}
