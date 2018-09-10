import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Welcome from './Welcome'
import 'bootstrap/dist/css/bootstrap.min.css'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<Welcome />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
