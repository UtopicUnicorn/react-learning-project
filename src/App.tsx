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
import Nomenclature from './pages/nomenclature';
import CreateNomenclature from './pages/nomenclature/forms/create-nomenclature.form';
import WorkWithItems from './pages/work-items';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price-rules" element={<PriceRules />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/add-partner" element={<PartnersForm />} />
          <Route path="/nomenclature" element={<Nomenclature />} />
          <Route path="/add-nomenclature" element={<CreateNomenclature />} />
          <Route path="/work-items" element={<WorkWithItems />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
