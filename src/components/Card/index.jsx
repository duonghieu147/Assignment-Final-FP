import { Col } from 'antd';
import React, { useState } from 'react';
//import { useDispatch } from "react-redux";
import { PushPin, Start } from '../../assets/svgs/GalleryIcons';
import './Card.scss';
export default function Card(props) {
	//const dispatch = useDispatch();
	const { data, handlePin, handleStart, id, listPin } = props;

	const configGridArea = position => {
		const positionCol = position % 2 === 0 ? 3 : 1;
		let positionRow;
		if (position <= 2) {
			positionRow = 1;
		} else {
			if (position % 2 !== 0) {
				positionRow = position;
			} else {
				positionRow = position - 1;
			}
		}
		return `${positionRow} / ${positionCol} / span 2 / span 2`;
	};

	const checkPin = id => {
		for (let i = 0; i < listPin?.length; i++) {
			if (listPin[i]['id'] === id) {
				return i + 1;
			}
		}
	};

	let gridArea;
	if (data.isPin) {
		gridArea = configGridArea(checkPin(data.id));
	}

	const handleIsPin = () => {
		handlePin(data, id);
	};

	const handleIsStart = () => {
		handleStart(data, id);
	};

	return (
		<div
			className="card"
			style={
				{ gridArea: gridArea }
			}
		> 
			<div className="card__wrapper">
				<img className="image__card" src={data.url} alt={data.id} />
				<p className="list__block ">{data.name}</p>
			</div>
			<div className="card__action ">
				<div className="card__action-wrapper">
					<div
						className="card__action-pin shape-square center"
						onClick={handleIsPin}
					>
						{data.isPin ? (
							<PushPin fill="#F98600" />
						) : (
							<PushPin fill="#969696" />
						)}
						{/* <PushPin /> */}
					</div>
					<div
						className="card__action-favorite shape-square center"
						onClick={handleIsStart}
					>
						{data.isFavorite ? (
							<Start fill="#F98600" />
						) : (
							<Start fill="#969696" />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
