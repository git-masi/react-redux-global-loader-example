import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';
import {
  hideLoader,
  showLoader,
} from '../../global/components/globalLoaderSlice';
import { mockRequest } from '../../utils/dummyData';

const id = shortid.generate();

export const customerInfoSlice = createSlice({
  name: 'customerInfo',
  initialState: { hasError: false, customer: {} },
  reducers: {
    getDataStart: (state) => {
      state.hasError = false;
    },
    getDateFailure: (state) => {
      state.hasError = true;
    },
    getDataSuccess: (state, action) => {
      const { payload = {} } = action;
      state.customer = payload;
    },
  },
});

const {
  getDataStart,
  getDateFailure,
  getDataSuccess,
} = customerInfoSlice.actions;

export const selectCustomer = (state) => state.customerInfo.customer;

export default customerInfoSlice.reducer;

export function fetchCustomerInfo() {
  return async (dispatch) => {
    try {
      dispatch(showLoader(id));

      dispatch(getDataStart());

      const customer = await mockRequest({
        username: 'some_guy',
        email: 'fake@mail.com',
      });

      dispatch(getDataSuccess(customer));

      dispatch(hideLoader(id));
    } catch (error) {
      console.log(error);
      dispatch(getDateFailure());
      dispatch(hideLoader(id));
    }
  };
}

export function clearCustomerInfoLoader() {
  return (dispatch) => {
    dispatch(hideLoader(id));
  };
}
