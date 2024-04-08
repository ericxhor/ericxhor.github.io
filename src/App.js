import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import AboutMePage from './pages/AboutMePage';
import LogPage from './pages/LogPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-portfolio" element={<PortfolioPage />} />
          <Route path="/about-me" element={<AboutMePage />} />
          <Route path="/contact-me" element={<LogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
