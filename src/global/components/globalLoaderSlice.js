import { createSlice } from '@reduxjs/toolkit';

export const globalLoaderSlice = createSlice({
  name: 'globalLoader',
  initialState: { showLoader: false, registeredEvents: [] },
  reducers: {
    showLoader: (state, action) => {
      const { payload } = action;
      if (!payload) return;
      const newEvents = [...state.registeredEvents, payload];
      if (newEvents.length > 0 && !state.showLoader) state.showLoader = true;
      state.registeredEvents = newEvents;
    },
    hideLoader: (state, action) => {
      const { payload } = action;
      if (!payload) return;
      const newEvents = state.registeredEvents.filter(
        (item) => item !== payload
      );
      state.registeredEvents = newEvents;
      if (newEvents.length === 0 && state.showLoader) state.showLoader = false;
    },
  },
});

export const {
  toggleLoader,
  showLoader,
  hideLoader,
} = globalLoaderSlice.actions;

export const currentGlobalLoaderState = (state) =>
  state.globalLoader.showLoader;

export default globalLoaderSlice.reducer;
