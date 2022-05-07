import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Landing from './pages/landing';
import Dashboard from './pages/dashboard';
import NotFound from './pages/404';
import SingIn from './pages/login';
import AlternativeApp from './pages/temporary/AlternativeApp';
// import Modal from './components/modals'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<SingIn />} />
        <Route path="/app" element={<Dashboard />} />
        <Route path="/alternative" element={<AlternativeApp />} />
        {/* <Route path="/modal" element={<Modal />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
