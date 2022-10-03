import { createSlice } from '@reduxjs/toolkit';

export const humanSlice = createSlice({
  name: 'human',
    initialState: false,
  reducers: {
    seeHuman: (state) => {
          return true;
    },
    resetHuman: (state) => {
      return false ;
    },
  },
});
export default humanSlice.reducer;
export const { seeHuman, resetHuman } = humanSlice.actions;