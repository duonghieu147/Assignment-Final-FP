import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import './index.scss';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import { login } from '../../Redux/actions/userAction';

export default function Login(props) {
	const dispatch = useDispatch();
	const [form] = Form.useForm();

	const handleSubmit = data => {
		dispatch(login(data.email, data.password));
	};

	const userLogin = useSelector(state => state.userLogin);
	const { userInfo, error } = userLogin;

	useEffect(() => {
		if (userInfo) {
			props.history.push('/');
			toast.success('Login is successfully');
		}
		if (error) {
			toast.error('The Username or Password is Incorrect');
		}
		return () => {};
	}, [props.history, userInfo, error]);

	return (
		<>
			<Form
				className="login"
				layout={'vertical'}
				form={form}
				onFinish={handleSubmit}
			>
				<Form.Item label="Welcome" className="login__heading">
					Signing up or login to see more.
				</Form.Item>
				<Form.Item
					className="login__input"
					label="Email Address"
					name="email"
				>
					<Input
						required
						className="login__input__email"
						placeholder="GuySimmmons@gmail.com"
					/>
				</Form.Item>
				<Form.Item
					className="login__input"
					label="Password"
					name="password"
				>
					<Input.Password
						required
						className="login__input__password"
						placeholder="*****"
					/>
				</Form.Item>
				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="login__submit"
					>
						Login
					</Button>
				</Form.Item>
			</Form>
		</>
	);
}
