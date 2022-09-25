import { combineReducers } from '@reduxjs/toolkit';
import { authApi } from './authAPI';
import testTypeReducer from './testType/testTypeSlice';
import answersReducer from './answers/answersSlice';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  testType: testTypeReducer,
  answers: answersReducer,
});

export { rootReducer };
