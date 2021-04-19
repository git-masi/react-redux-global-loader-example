import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';
import {
  hideLoader,
  showLoader,
} from '../../global/components/globalLoaderSlice';
import { mockRequest } from '../../utils/dummyData';

const id = shortid.generate();

export const customerOrderSlice = createSlice({
  name: 'customerOrders',
  initialState: { hasError: false, orders: [] },
  reducers: {
    getDataStart: (state) => {
      state.hasError = false;
    },
    getDateFailure: (state) => {
      state.hasError = true;
    },
    getDataSuccess: (state, action) => {
      const { payload = [] } = action;
      state.orders = payload;
    },
  },
});

const {
  getDataStart,
  getDateFailure,
  getDataSuccess,
} = customerOrderSlice.actions;

export const selectOrders = (state) => state.customerOrders.orders;

export default customerOrderSlice.reducer;

export function fetchCustomerOrders() {
  return async (dispatch) => {
    try {
      dispatch(showLoader(id));

      dispatch(getDataStart());

      const customer = await mockRequest([
        { id: 1, item: 'fat pills', total: 1337 },
      ]);

      dispatch(getDataSuccess(customer));

      dispatch(hideLoader(id));
    } catch (error) {
      console.log(error);
      dispatch(getDateFailure());
      dispatch(hideLoader(id));
    }
  };
}

export function clearCustomerOrdersLoader() {
  return (dispatch) => {
    dispatch(hideLoader(id));
  };
}
