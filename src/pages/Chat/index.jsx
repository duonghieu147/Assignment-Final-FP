import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SideBar from '../../components/SideBar';
import './Chat.scss';
import ChatLeft from '../../components/ChatLeft';
import ChatRight from '../../components/ChatRight';
import ChatHeader from '../../components/ChatHeader';
import ChatMain from '../../components/ChatMain';

import { getChatList as listChat } from '../../Redux/actions/chatAction';

export default function Chat() {
	const dispatch = useDispatch();

	const getChatList = useSelector(state => state.getChatList);
	const { chats, loading, error } = getChatList;
	useEffect(() => {
		dispatch(listChat());
	}, [dispatch]);

	return (
		<>
			<SideBar />
			<div id="chat">
				<div className="chat">
					<div className="chat__left">
						<ChatLeft />
					</div>
					<div className="chat__main">
						<ChatHeader />
						<ChatMain chats={chats}/>
					</div>
					<div className="chat__right">
						<ChatRight />
					</div>
				</div>
			</div>
		</>
	);
}
