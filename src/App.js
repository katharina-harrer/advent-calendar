import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import BaseComponent from './components/BaseComponent';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/:day?/*" element={<BaseComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;