import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import PriceRules from './pages/price-rules';
import Partners from './pages/patners';
import Login from './pages/auth/login';
import Registration from './pages/auth/registration';
import Deals from './pages/deals';
import PartnersForm from './pages/patners/forms/partners.form';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/price-rules" element={<PriceRules />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/add-partner" element={<PartnersForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
