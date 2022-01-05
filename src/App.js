import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Employee from './components/Employee';
import Header from './components/Header';
// import Slab from './components/Slab';
import BonusEditor from './components/BonusEditor';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Employee />}/>
          <Route exact path="/edit/:id/:lid" element={<BonusEditor />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
