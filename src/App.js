import React from 'react';
import Navbar from './component/navbar';
import './App.css';
import Home from './component/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Employer from './component/employer';
import Jobs from './component/jobs';
import About from './component/about';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/employer' element={<Employer/>} />
          <Route path='/jobs' element={<Jobs/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;