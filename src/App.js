import React from 'react';
import { useSelector } from 'react-redux';
import GlobalLoader from './global/components/GlobalLoader';
import CustomerView from './features/customer/CustomerView';
import AdminView from './features/admin/AdminView';

export default function App() {
  const show = useSelector((state) => state.globalLoader);

  return (
    <>
      <GlobalLoader show={show} />
      <CustomerView />
      <AdminView />
    </>
  );
}
