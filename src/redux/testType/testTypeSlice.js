import { createSlice } from '@reduxjs/toolkit';

export const testTypeSlice = createSlice({
  name: 'testType',
  initialState: '',
  reducers: {
    setTestType: (_, { payload }) => {
      return payload;
    },
    resetTestType: (state, action) => {
      return '';
    },
  },
});

export default testTypeSlice.reducer;
export const { setTestType, resetTestType } = testTypeSlice.actions;
