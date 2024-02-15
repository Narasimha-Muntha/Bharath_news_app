import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import HomeScreen from './components/HomeScreen';
import ArticleDetailScreen from './components/ArticleDetailScreen';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} /> 
          <Route path="/article/:id" element={<ArticleDetailScreen />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
