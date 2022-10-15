import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './scss/app.scss';

import Header from './components/header';
import { Home, NotFound, Cart } from './pages/index';

import { createContext } from 'react';

export const AppContext = createContext({});

function App() {
  return (
    <AppContext.Provider value={{}}>
      <Router>
        <div className="wrapper">
          <Header />
          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
