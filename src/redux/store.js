import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shezamCoreApi } from './services/shezamCore';

export const store = configureStore({
  reducer: {
    [ shezamCoreApi.reducerPath ]: shezamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat(shezamCoreApi.middleware),
});
