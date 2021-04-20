import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GlobalLoader from './global/components/GlobalLoader';
import CustomerView from './features/customer/CustomerView';
import AdminView from './features/admin/AdminView';
import { currentGlobalLoaderState } from './global/components/globalLoaderSlice';

export default function App() {
  const show = useSelector(currentGlobalLoaderState);

  return (
    <Router>
      <GlobalLoader show={show} />

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
