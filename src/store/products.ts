import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = productsSlice;
export const { setLoading } = actions;
export default reducer;
