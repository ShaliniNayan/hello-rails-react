/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';
import fetchGreeting from '../thunk';

const initialState = {
  greeting: '',
  isLoading: true,
  error: false,
  errMsg: '',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload.message;
        state.isLoading = false;
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.errMsg = action.payload.error;
      });
  },
});

export default greetingSlice.reducer;
