import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
			<ToastContainer autoClose={1500} />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root'),
);
