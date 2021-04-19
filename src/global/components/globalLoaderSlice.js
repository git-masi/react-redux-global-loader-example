import { createSlice } from '@reduxjs/toolkit';

let registry = [];

export const globalLoaderSlice = createSlice({
  name: 'showGlobalLoader',
  initialState: false,
  reducers: {
    showLoader: (state, action) => {
      // console.log('show ', { action });
      // console.log('show ', { registry });
      const { payload } = action;
      if (!payload) return;
      registry.push(payload);
      if (!state) return true;
      return state;
    },
    hideLoader: (state, action) => {
      // console.log('hide ', { action });
      // console.log('hide ', { registry });
      const { payload } = action;
      if (!payload) return;
      registry = registry.filter((item) => item !== payload);
      if (registry.length === 0 && state) return false;
      return state;
    },
  },
});

export const {
  toggleLoader,
  showLoader,
  hideLoader,
} = globalLoaderSlice.actions;

export const currentGlobalLoaderState = (state) => state.showGlobalLoader;

export default globalLoaderSlice.reducer;
