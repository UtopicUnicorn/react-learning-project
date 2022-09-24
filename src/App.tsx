import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Index from './pages/price-rules';
import Partners from './pages/patners';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price-rules" element={<Index />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
