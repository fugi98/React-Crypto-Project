import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FirstSection from './FirstSection';
import './App.css';
import Header from './Header';
import Tabs from './Tabs';
import Footer from './Footer';
import ContentSection from './ContentSection';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <FirstSection />
        <Tabs />
        <Routes>
          <Route path="/essentials" element={<ContentSection tab="essentials" /> } />
          <Route path="/advanced" element={<ContentSection tab="advanced" />} />
          <Route path="*" element={<Navigate to="/essentials" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


