import { createSlice } from '@reduxjs/toolkit';

export const answersSlice = createSlice({
    name: 'answers',
    initialState:[],
    reducers: {
        setAnswers: (state, { payload }) =>
            {return [...state, payload]}
    }
})
export default answersSlice.reducer;
export const { setAnswer } =
  answersSlice.actions;
