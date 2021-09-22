import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SideBar from '../../components/SideBar';
import './Chat.scss';
import ChatLeft from '../../components/ChatLeft';
import ChatRight from '../../components/ChatRight';
import ChatHeader from '../../components/ChatHeader';
import ChatMain from '../../components/ChatMain';
import ChatBox from '../../components/ChatBox';

import {
	getChatList as listChat,
	addChat,
} from '../../Redux/actions/chatAction';

export default function Chat() {
	const dispatch = useDispatch();

	const getChatList = useSelector(state => state.getChatList);
	const { chats, loading, error } = getChatList;
	console.log(chats);
	const userLogin = useSelector(state => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		dispatch(listChat(userInfo));
	}, [dispatch, userInfo]);

	const addChatHandle = comment => {
		dispatch(addChat(userInfo, comment));
	};

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
						<ChatMain chats={chats} />
						<ChatBox addChatHandle={addChatHandle} />
					</div>
					<div className="chat__right">
						<ChatRight />
					</div>
				</div>
			</div>
		</>
	);
}
