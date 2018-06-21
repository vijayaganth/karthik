import React from 'react';

import App from './components/App';
import Sample from "./components/Sample";
import Omnia from "./components/Omnia";
import Success from "./components/Success";


import { Route, Switch } from "react-router-dom";

const Main = () => (
	<Switch>
		<Route path="/" exact component={App} /> 
		<Route path="/omnia" component={Omnia} />
		<Route path="/sample" component={Sample} />
		<Route path="/success" component={Success} />
	</Switch>
)
export default Main
	