import { createSlice } from '@reduxjs/toolkit';

export const testTypeSlice = createSlice({
  name: 'testType',
  initialState: '',
  reducers: {
    setTestType: (_, { payload }) => {
      return payload;
    },
  },
});

export default testTypeSlice.reducer;
export const {setTestType } = testTypeSlice.actions;
