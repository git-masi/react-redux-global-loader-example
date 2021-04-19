import { configureStore } from '@reduxjs/toolkit';
import customerInfo from '../features/customer/customerInfoSlice';
import customerOrders from '../features/customer/customerOrdersSlice';
import globalLoader from '../global/components/globalLoaderSlice';

export const store = configureStore({
  reducer: { globalLoader, customerInfo, customerOrders },
});
