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
    <div>
      <CustomerSidebar />
      <CustomerOrders />
    </div>
  );
}

function CustomerSidebar() {
  const customer = useSelector(selectCustomer);
  return (
    <div>
      <p>{customer.username}</p>
      <p>{customer.email}</p>
    </div>
  );
}

function CustomerOrders() {
  const orders = useSelector(selectOrders);
  return (
    <div>
      {orders.map((o) => (
        <p key={o.id}>{o.item}</p>
      ))}
    </div>
  );
}
