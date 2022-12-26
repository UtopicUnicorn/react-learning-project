import React, { useEffect } from 'react';
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
import Protected from './components/hooks/protected-route';
import { useDispatch } from 'react-redux';
import { useAuth } from './components/hooks/auth-hook';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = useAuth();
    if (token !== null) dispatch({ type: 'SAVE_TOKEN', payload: { token: token } });
  }, []);
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route
            path="/price-rules"
            element={
              <Protected>
                <PriceRules />
              </Protected>
            }
          />
          <Route
            path="/partners"
            element={
              <Protected>
                <Partners />
              </Protected>
            }
          />
          <Route
            path="/deals"
            element={
              <Protected>
                <Deals />
              </Protected>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route path="/signup" element={<Registration />} />
          <Route
            path="/add-partner"
            element={
              <Protected>
                <PartnersForm />
              </Protected>
            }
          />
          <Route
            path="/nomenclature"
            element={
              <Protected>
                <Nomenclature />
              </Protected>
            }
          />
          <Route
            path="/add-nomenclature"
            element={
              <Protected>
                <CreateNomenclature />
              </Protected>
            }
          />
          <Route
            path="/work-items"
            element={
              <Protected>
                <WorkWithItems />
              </Protected>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
