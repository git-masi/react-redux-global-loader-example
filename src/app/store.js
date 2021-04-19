import { configureStore } from '@reduxjs/toolkit';
import globalLoader from '../global/components/globalLoaderSlice';
import customerInfo from '../features/customer/customerInfoSlice';
import customerOrders from '../features/customer/customerOrdersSlice';
import adminInfo from '../features/admin/adminInfoSlice';
import adminSettings from '../features/admin/adminSettingsSlice';

export const store = configureStore({
  reducer: {
    globalLoader,
    customerInfo,
    customerOrders,
    adminInfo,
    adminSettings,
  },
});
