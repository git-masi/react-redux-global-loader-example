import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GlobalLoader from './global/components/GlobalLoader';
import CustomerView from './features/customer/CustomerView';
import AdminView from './features/admin/AdminView';

export default function App() {
  const show = useSelector((state) => state.globalLoader);

  return (
    <Router>
      <GlobalLoader show={show} />

      <nav>
        <Link to="/customer">Customer</Link>
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
