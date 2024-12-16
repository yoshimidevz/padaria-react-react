import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Inicio';
import Contato from './pages/Contato';
import Galeria from './pages/Galeria';
import Historia from './pages/Historia';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Contato' element={<Contato />}/>
        <Route path='/Galeria' element={<Galeria />}/>
        <Route path='/Historia' element={<Historia />}/>
      </Routes>
    <Footer />
    </Router>
  </StrictMode>
)
