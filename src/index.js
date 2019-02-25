import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/main.css';
import './style/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'hover.css/css/hover-min.css';
import 'reactstrap/dist/reactstrap.full.min.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
