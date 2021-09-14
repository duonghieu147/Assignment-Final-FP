import React from 'react';
import Quote from '../Quote';

import { generateName } from '../../config/GetName';

export default function ChatItem(props) {
	const { chat } = props;
	return (
		<>
			<div className="chatmain__item">
				<p className="chatmain__item__avt">{generateName(chat.name)}</p>
				<div className="chatmain__item__right">
					<div className="chatmain__item__right__heading">
						<p className="chatmain__item__right__heading__name">
							{chat.name}
						</p>
						<p className="chatmain__item__right__heading__time">
							• 12:49 PM
						</p>
					</div>
					{chat.quote && (
						<Quote quote={chat.qoute} quoteUser={chat.quoteUser} />
					)}
					{/* <Quote /> */}
					<p className="chatmain__item__right__content">
						{chat.comment}
					</p>
				</div>
			</div>
		</>
	);
}
