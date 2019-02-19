import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/main.css';
import './style/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
