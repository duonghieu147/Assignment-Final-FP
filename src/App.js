import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import NotFound from "./components/NotFound";
import MyTask from "./pages/MyTask";
import PrivateRoute from "./config/PrivateRoute";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Reports from "./pages/Reports";
import Dashboard from "./pages/Dashboard";
import Gallery from "./pages/Gallery";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/my-task" exact component={MyTask}></PrivateRoute>
        <PrivateRoute path="/chat" exact component={Chat}></PrivateRoute>
        <PrivateRoute path="/report" exact component={Reports}></PrivateRoute>
        <PrivateRoute path="/" exact component={Dashboard}></PrivateRoute>
        <PrivateRoute path="/gallery" exact component={Gallery}></PrivateRoute>
        <Route path="/login" exact component={Login} />
        <Route path="*" exact component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
