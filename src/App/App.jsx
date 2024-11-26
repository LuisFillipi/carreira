import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Cadastro from '../components/Cadastro';
import Lista from '../components/Lista';
import Sobre from '../components/Sobre';
import Carreira from '../components/Carreira'; 

const App = () => {
  return (
    <Router>
      <Nav />
      <div style={{ paddingTop: '70px', paddingBottom: '50px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/lista" element={<Lista />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/carreira" element={<Carreira />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;