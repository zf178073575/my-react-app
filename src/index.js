import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import Clock from './pages/time.js';
import LoginControl from './pages/demo1.js'
import './pages/hooks.js'
import Example from './pages/hooks.js';


ReactDOM.render(
    <Clock/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
