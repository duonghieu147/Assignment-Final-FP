import { Form } from 'antd';
import quillEmoji from 'quill-emoji';
import 'quill-emoji/dist/quill-emoji.css';
import React, { useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './ChatBox.scss';

import { Icon } from '../../assets/svgs/Icon';

const icons = ReactQuill.Quill.import('ui/icons');
const { EmojiBlot, ToolbarEmoji } = quillEmoji;

Quill.register(
	{
		'formats/emoji': EmojiBlot,
		'modules/emoji-toolbar': ToolbarEmoji,
	},
	true,
);

icons[
	'bold'
] = `<svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.6 6.79C9.57 6.12 10.25 5.02 10.25 4C10.25 1.74 8.5 0 6.25 0H1C0.45 0 0 0.45 0 1V13C0 13.55 0.45 14 1 14H6.78C8.85 14 10.74 12.31 10.75 10.23C10.76 8.7 9.9 7.39 8.6 6.79ZM3 2.5H6C6.83 2.5 7.5 3.17 7.5 4C7.5 4.83 6.83 5.5 6 5.5H3V2.5ZM6.5 11.5H3V8.5H6.5C7.33 8.5 8 9.17 8 10C8 10.83 7.33 11.5 6.5 11.5Z" fill="currentColor"/>
</svg>
`;

icons[
	'italic'
] = `<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5C4 2.33 4.67 3 5.5 3H6.21L2.79 11H1.5C0.67 11 0 11.67 0 12.5C0 13.33 0.67 14 1.5 14H6.5C7.33 14 8 13.33 8 12.5C8 11.67 7.33 11 6.5 11H5.79L9.21 3H10.5C11.33 3 12 2.33 12 1.5C12 0.67 11.33 0 10.5 0H5.5C4.67 0 4 0.67 4 1.5Z" fill="currentColor"/>
</svg>
`;

const formats = [
	'bold',
	'italic',
	'orderlist',
	'unorderlist',
	'text',
	'attach',
	'atsign',
	'emoji',
];

const emoji = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM13.5 9C14.33 9 15 8.33 15 7.5C15 6.67 14.33 6 13.5 6C12.67 6 12 6.67 12 7.5C12 8.33 12.67 9 13.5 9ZM6.5 9C7.33 9 8 8.33 8 7.5C8 6.67 7.33 6 6.5 6C5.67 6 5 6.67 5 7.5C5 8.33 5.67 9 6.5 9ZM10 15.5C12.03 15.5 13.8 14.39 14.75 12.75C14.94 12.42 14.7 12 14.31 12H5.69C5.31 12 5.06 12.42 5.25 12.75C6.2 14.39 7.97 15.5 10 15.5Z" fill="#969696"/>
</svg>
`;

const modules = {
	toolbar: {
		container: '#toolbar',
	},
	'emoji-toolbar': {
		buttonIcon: emoji,
	},

	'emoji-textarea': false,
	'emoji-shortname': true,
	clipboard: {
		matchVisual: false,
	},
};

export default function ChatBox(props) {
	const [form] = Form.useForm();
	const ref = useRef();

	const handleEnterSubmit = e => {
		if (e.keyCode === 13 && !e.shiftKey) ref.current.submit();
	};

	const onSubmit = values => {
		const newValues = values.body.replace(/<(?!\br\s*\/?)[^>]+>/g, '');
		props.addChatHandle(newValues);
		form.resetFields();
	};

	return (
		<>
			<Form
				layout="vertical"
				form={form}
				onFinish={onSubmit}
				ref={ref}
				onKeyDown={handleEnterSubmit}
			>
				<Form.Item
					name="body"
					rules={[
						{
							required: true,
							message: 'Please enter body of post',
						},
					]}
				>
					<ReactQuillEditor />
				</Form.Item>
			</Form>
		</>
	);
}

const ReactQuillEditor = ({ value, onChange }) => {
	return (
		<div id="chatbox">
			<ReactQuill
				theme="snow"
				placeholder="Write Something"
				value={value || ''}
				modules={modules}
				formats={formats}
				onChange={onChange}
				className="chatbox"
			/>
			<CustomToolbar />
		</div>
	);
};

const CustomToolbar = () => {
	return (
		<div id="toolbar" className="toolbarc">
			<div className="toolbarc__left">
				<button className="icon">
					<Icon.Attach />
				</button>
				<button className="ql-bold icon" />
				<button className="ql-italic icon" />
				<button className="ql-text icon">
					<Icon.TextAlign />
				</button>
				<button className="icon">
					<Icon.OrderList />
				</button>
				<button className="icon">
					<Icon.UnOrderList />
				</button>
			</div>
			<div className="toolbarc__right">
				<button className="icon">
					<Icon.AtSign />
				</button>
				<button className="ql-emoji icon" />
			</div>
		</div>
	);
};
