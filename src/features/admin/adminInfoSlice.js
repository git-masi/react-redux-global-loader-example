import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';
import {
  hideLoader,
  showLoader,
} from '../../global/components/globalLoaderSlice';
import { mockRequest } from '../../utils/dummyData';

const id = shortid.generate();

export const adminInfoSlice = createSlice({
  name: 'customerInfo',
  initialState: { hasError: false, admin: {} },
  reducers: {
    getDataStart: (state) => {
      state.hasError = false;
    },
    getDateFailure: (state) => {
      state.hasError = true;
    },
    getDataSuccess: (state, action) => {
      const { payload = {} } = action;
      state.admin = payload;
    },
  },
});

const { getDataStart, getDateFailure, getDataSuccess } = adminInfoSlice.actions;

export const selectAdmin = (state) => state.adminInfo.admin;

export default adminInfoSlice.reducer;

export function fetchAdminInfo() {
  return async (dispatch) => {
    try {
      dispatch(showLoader(id));

      dispatch(getDataStart());

      const admin = await mockRequest({
        id: shortid.generate(),
        access: 'superAdmin',
      });

      dispatch(getDataSuccess(admin));

      dispatch(hideLoader(id));
    } catch (error) {
      console.log(error);
      dispatch(getDateFailure());
      dispatch(hideLoader(id));
    }
  };
}

export function clearAdminInfoLoader() {
  return (dispatch) => {
    dispatch(hideLoader(id));
  };
}
