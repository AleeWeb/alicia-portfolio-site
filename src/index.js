import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'hover.css/css/hover-min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();