import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GlobalLoader from './global/components/GlobalLoader';
import CustomerView from './features/customer/CustomerView';
import AdminView from './features/admin/AdminView';

export default function App() {
  return (
    <Router>
      <GlobalLoader />

      <nav style={{ padding: '1rem' }}>
        <Link to="/customer" style={{ marginRight: '1rem' }}>
          Customer
        </Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <Switch>
        <Route exact path="/customer">
          <CustomerView />
        </Route>

        <Route exact path="/admin">
          <AdminView />
        </Route>
      </Switch>
    </Router>
  );
}
