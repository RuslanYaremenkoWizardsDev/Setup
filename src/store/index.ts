import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './example/reducer';
import { githubApi } from './example/api';

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    counter: counterReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
