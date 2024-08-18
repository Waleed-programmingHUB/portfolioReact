import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/_layouts/Footer';
import Header from './components/_layouts/Header';
import HomeComponent from './components/HomeComponent';
import ContactComponent from './components/ContactComponent';


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={HomeComponent}/>
        <Route path="/contact" Component={ContactComponent}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
