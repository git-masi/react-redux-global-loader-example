import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';
import {
  hideLoader,
  showLoader,
} from '../../global/components/globalLoaderSlice';
import { mockRequest } from '../../utils/dummyData';

const id = shortid.generate();

export const adminSettingsSlice = createSlice({
  name: 'customerSettings',
  initialState: { hasError: false, settings: {} },
  reducers: {
    getDataStart: (state) => {
      state.hasError = false;
    },
    getDateFailure: (state) => {
      state.hasError = true;
    },
    getDataSuccess: (state, action) => {
      const { payload = {} } = action;
      state.settings = payload;
    },
  },
});

const {
  getDataStart,
  getDateFailure,
  getDataSuccess,
} = adminSettingsSlice.actions;

export const selectSettings = (state) => state.adminSettings.settings;

export default adminSettingsSlice.reducer;

export function fetchAdminSettings() {
  return async (dispatch) => {
    try {
      dispatch(showLoader(id));

      dispatch(getDataStart());

      const settings = await mockRequest({
        darkmode: true,
        accountEnabled: true,
      });

      dispatch(getDataSuccess(settings));

      dispatch(hideLoader(id));
    } catch (error) {
      console.log(error);
      dispatch(getDateFailure());
      dispatch(hideLoader(id));
    }
  };
}

export function clearAdminSettingsLoader() {
  return (dispatch) => {
    dispatch(hideLoader(id));
  };
}
