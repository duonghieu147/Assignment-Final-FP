import React from 'react';
import './ChatMain.scss';
import ChatItem from '../ChatItem';

export default function ChatMain(props) {
	const { chats } = props;
	return (
		<div className="chatmain">
			{chats?.map(chat => (
				<ChatItem key={chat.id} chat={chat} />
			))}
		</div>
	);
}
