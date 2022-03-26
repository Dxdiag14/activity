import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Civil from './components/pages/Civil';
import Computer from './components/pages/Computer';
import Electronics from './components/pages/Electronics';
import Industrial from './components/pages/Industrial';
import Signup from './components/pages/Signup';

function App() {
    return (
      <>
      <Router>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />}/> 
            <Route path='/Civil' element={<Civil />}/>
            <Route path='/Computer' element={<Computer />}/>
            <Route path='/Electronics' element={<Electronics />}/>
            <Route path='/Industrial' element={<Industrial />}/>
            <Route path='/Signup' element={<Signup />}/>
          </Routes>
      </Router>
      </>
    );
}

export default App;