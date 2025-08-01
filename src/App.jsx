import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Other Pages
import Kerala from './pages/Kerala';
import UAE from './pages/UAE';
import Homepage from './pages/Homepage';


function HomePage() {
  return (
    <>
      <Homepage />
    
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kerala" element={<Kerala />} />
        <Route path="/uae" element={<UAE />} />
      </Routes>
    </Router>
  );
}

export default App;
