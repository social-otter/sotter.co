import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { AuthProvider } from './contexts/AuthContext';
import RequireAuth from './router/RequireAuth';

import Landing from './screens/landing';
import Dashboard from './screens/dashboard';
import NotFound from './screens/404';
import SingIn from './screens/login';
import Trackings from './screens/trackings';
import Webhook from './screens/webhook';
import Sample from './screens/sample';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<SingIn />} />
          <Route path="/app/dashboard" element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route path="/app/trackings" element={
              <RequireAuth>
                <Trackings />
              </RequireAuth>
            }
          />
          <Route path="/app/webhook" element={
              <RequireAuth>
                <Webhook />
              </RequireAuth>
            }
          />
          <Route path="/app/sample" element={
              <RequireAuth>
                <Sample />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
