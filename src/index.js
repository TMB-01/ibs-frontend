import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
// import Store from './redux/store/store';
import "./main.css"

ReactDOM.render(
  <Router>
    {/* <Provider store={Store}> */}
      <App />
    {/* </Provider> */}
  </Router>,
  document.getElementById('root')
);