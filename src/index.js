import React from 'react';
import ReactDOM from 'react-dom';
import "lib-flexible"
import 'antd-mobile/dist/antd-mobile.css';
import './style/index.css';
import App from './App.jsx';
// 将封装方法挂在到React.Component原型上
import axios from './api/ajax.js';
React.Component.prototype.axios = axios;

// axios.post('/about/aboutUs').then( res => {
//     console.log(res);
// })

ReactDOM.render(<App />, document.getElementById('root'));