// eslint-disable-next-line import/no-extraneous-dependencies
import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';
const url = '/api/v1/greetings/random';

const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    // eslint-disable-next-line no-undef
    return thunkAPI.rejectWithValue({ error: e.message });
  }
});

export default fetchGreeting;
