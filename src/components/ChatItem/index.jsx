import React from 'react';
import Quote from '../Quote';

import { generateName } from '../../config/GetName';
import {
	generateColor,
	generateBackGroundColor,
} from '../../config/randomColor';
import { generateTime } from '../../config/GetTime';

export default function ChatItem(props) {
	const { chat } = props;
	return (
		<>
			<div className="chatmain__item">
				<p
					className="chatmain__item__avt"
					style={{
						color: `${generateColor()}`,
						background: generateBackGroundColor(),
					}}
				>
					{chat.name
						? generateName(chat.name)
						: generateName('Minh Phu')}
				</p>
				<div className="chatmain__item__right">
					<div className="chatmain__item__right__heading">
						<p className="chatmain__item__right__heading__name">
							{chat.name ? chat.name : 'Minh Phu'}
						</p>
						<p className="chatmain__item__right__heading__time">
							• {generateTime(chat.createdAt)}
						</p>
					</div>
					{chat.quote && (
						<Quote quote={chat.quote} quoteUser={chat.quoteUser} />
					)}
					<p
						dangerouslySetInnerHTML={{ __html: chat.comment }}
						className="chatmain__item__right__content"
					/>
				</div>
			</div>
		</>
	);
}
