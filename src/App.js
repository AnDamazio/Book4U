import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SobreNos from './pages/SobreNos';
import Aplicativo from './pages/Aplicativo';
export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/SobreNos" element={<SobreNos/>}/>
          <Route path="/Aplicativo" element={<Aplicativo/>}/>  
        </Routes>
      </Router>
    );
  }
}



