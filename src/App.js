import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './scss/app.scss';

import Header from './components/header';
import { Home, NotFound, Cart } from './pages/index';

import { createContext } from 'react';
import { useState } from 'react';

export const AppContext = createContext({});

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <AppContext.Provider value={{ searchValue, setSearchValue }}>
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
