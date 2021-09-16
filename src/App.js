import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from './components/Header';

import Login from './pages/Login';
import Chat from './pages/Chat';
import Reports from './pages/Reports';
import Dashboard from './pages/Dashboard';

import PrivateRoute from './config/PrivateRoute';
function App() {
	return (
		<BrowserRouter>
			<Switch>
				<PrivateRoute path="/chat" exact component={Chat}></PrivateRoute>
				<PrivateRoute path="/report" exact component={Reports}></PrivateRoute>
				<PrivateRoute path="/dashboard" exact component={Dashboard}></PrivateRoute>

				<Route path="/login" exact component={Login} />
				<Route path="*" exact component={NotFound}></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
