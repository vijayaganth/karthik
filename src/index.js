import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import registerServiceWorker from './registerServiceWorker';

import store from "./store";

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
