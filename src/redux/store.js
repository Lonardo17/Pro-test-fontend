// import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import {
//   persistStore,
//   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {authApi} from './authAPI'
import testTypeReducer from './testType/testTypeSlice';
import answersReducer from './answers/answersSlice';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        testType: testTypeReducer,
        answers: answersReducer

            },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});