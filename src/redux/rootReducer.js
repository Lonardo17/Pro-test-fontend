import { combineReducers } from '@reduxjs/toolkit';
import { authApi } from './authAPI';
import testTypeReducer from './testType/testTypeSlice';
import answersReducer from './answers/answersSlice';
import userSlice from './auth/authReducer';
import humanReducer from './human/humanSlices'

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [userSlice.name]: userSlice.reducer,
  testType: testTypeReducer,
  answers: answersReducer,
  human: humanReducer ,
});

export { rootReducer };
