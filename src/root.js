import React from 'react';

import Main from './main';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

const Root = ({ store }) => (
	<Router>
		<Provider store={store}>
			<Main />
		</Provider>
	</Router>
)
export default Root
	
