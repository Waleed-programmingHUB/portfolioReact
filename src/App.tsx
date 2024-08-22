import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/_layouts/Footer';
import Header from './components/_layouts/Header';
import HomeComponent from './components/HomeComponent';
import ErrorComponent from './components/ErrorComponent';
import ContactComponent from './components/ContactComponent';


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={HomeComponent} />
        <Route path="/app" Component={HomeComponent} />
        <Route path="/contact" Component={ContactComponent} />
        <Route path="*" Component={ErrorComponent} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
