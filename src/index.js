import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './component/home'
import About from './component/about'
import Employer from './component/employer'
import Jobs from './component/jobs'
ReactDOM.render(
  <React.StrictMode>
    < Home/>
    <Employer/> 
    <Jobs/>
    <About/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();