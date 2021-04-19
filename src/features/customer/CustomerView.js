import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCustomerInfoLoader,
  fetchCustomerInfo,
  selectCustomer,
} from './customerInfoSlice';
import {
  clearCustomerOrdersLoader,
  fetchCustomerOrders,
  selectOrders,
} from './customerOrdersSlice';

export default function CustomerView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomerInfo());
    dispatch(fetchCustomerOrders());
    return () => {
      dispatch(clearCustomerInfoLoader());
      dispatch(clearCustomerOrdersLoader());
    };
  }, [dispatch]);

  return (
    <div style={{ padding: '1rem' }}>
      <CustomerSidebar />
      <CustomerOrders />
    </div>
  );
}

function CustomerSidebar() {
  const customer = useSelector(selectCustomer);
  return (
    <div
      style={{
        marginBottom: '1rem',
        padding: '1rem',
        border: '1px solid black',
      }}
    >
      <p>{customer.username}</p>
      <p>{customer.email}</p>
    </div>
  );
}

function CustomerOrders() {
  const orders = useSelector(selectOrders);
  return (
    <div
      style={{
        marginBottom: '1rem',
        padding: '1rem',
        border: '1px solid black',
      }}
    >
      {orders.map((o) => (
        <p key={o.id}>{o.item}</p>
      ))}
    </div>
  );
}
