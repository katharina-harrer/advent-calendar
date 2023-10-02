import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, AdventCalendar } from './pages';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adventcalendar/:day?/*" element={<AdventCalendar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;