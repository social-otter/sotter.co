import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import 'flowbite';
// import App from './App';
import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from './pages/Home';
import Landing from './pages/Landing';
import Dashboard from './pages/dashboard';
import NotFound from './pages/NotFound';
import SingIn from './pages/SignIn';
import AlternativeApp from './pages/AlternativeApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// root.render(
//   <React.StrictMode>
//     <div className='h-full bg-white dark:bg-gray-900'>
//       <App />
//     </div>
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<SingIn />} />
        <Route path="/app" element={<Dashboard />} />
        <Route path="/alternative" element={<AlternativeApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
