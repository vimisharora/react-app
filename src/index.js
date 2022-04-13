import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './component/employer'
ReactDOM.render(
  <React.StrictMode>
    < Home/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();