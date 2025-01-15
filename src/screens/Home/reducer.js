// features/user/userSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_BASE_URL} from '@env';

export const convertCurrency = createAsyncThunk(
  'home/convertCurrency',
  async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}latest/IDR`);
      return response.data.data;
    } catch (error) {
      console.log('error', error.response);
      return error.response;
    }
  },
);

const initialState = {
  listTransaction: [],
  currency: null,
  loading: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.listTransaction = state.listTransaction.concat(action.payload);
    },
    editTransaction: (state, action) => {
      state.listTransaction = state.listTransaction.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
    deleteTransaction: (state, action) => {
      state.listTransaction = state.listTransaction.filter(
        item => item.id !== action.payload,
      );
    },
    clearTransaction: state => {
      state.listTransaction = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(convertCurrency.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(convertCurrency.fulfilled, (state, action) => {
        state.loading = false;
        state.currency = action.payload;
      })
      .addCase(convertCurrency.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const {
  addTransaction,
  deleteTransaction,
  editTransaction,
  clearTransaction,
} = homeSlice.actions;

export default homeSlice.reducer;
