import { createSlice } from '@reduxjs/toolkit';

export const answersSlice = createSlice({
  name: 'answers',
  initialState: [],
  reducers: {
    addAnswer: (state, { payload }) => {
      return [...state, payload];
    },
    resetAnswers: (state, action) => {
      return [];
    },
  },
});

export default answersSlice.reducer;
export const { addAnswer, resetAnswers } = answersSlice.actions;
