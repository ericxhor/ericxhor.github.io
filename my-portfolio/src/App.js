import React from 'react';
import Header from "./components/Header";
// import FadeToBlack from './components/FadeToBlack';
import HomePage from './pages/HomePage';
import PortfolioPage from './components/PortfolioPage';
import AboutMePage from './components/AboutMePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-portfolio" element={<PortfolioPage />} />
          <Route path="/about-me" element={<AboutMePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
