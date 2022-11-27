import { createSlice } from '@reduxjs/toolkit';

const initialState = {filter: '',};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterState(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilterState } = filterSlice.actions;
