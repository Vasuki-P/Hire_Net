import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Adminlogin from './Adminlogin';
import User from './User';
import Admin from './Admin';
import Signup from './Signup';
import Login from './Login';
import './App.css'; 
import axios from 'axios';

axios.defaults.headers = {
  "Content-Type":"application/json",
  "ngrok-skip-browser-warning":"69420",
};

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
