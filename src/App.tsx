import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/Home';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        {/* <Route exact path="/login" element={<Login/>}/> */}
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </Router>   
  );
}

export default App;
