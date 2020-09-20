import React, {Component} from 'react';
import './App.css';
import history from "./history"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Assets/SCSS/core/variables/_components-variables.scss"

import {
	Router,
	Route,
	Switch,
} from "react-router-dom"

import Login from "./Pages/Login/Login"
import Dashboard from './Pages/Dashboard/Dashboard';
import SignUp from './Pages/SignUp/SignUp';
import Settings from './Pages/Settings/Settings'


class App extends Component {
	render() {
		return (

				<Router history={history}>
					<ToastContainer/>

					<Switch>
						<Route exact path={"/"} component={Login}/>
						<Route exact path={"/SignUp"} component={SignUp}/>
						<Route exact path={"/Dashboard"} component={Dashboard}/>
						<Route exact path={"/Settings"} component={Settings}/>
					</Switch>
				</Router>
		);
	}
}

export default App;
