import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cpuShipsReducer from '../features/cpuBoard/cpuShipsSlice'
import playerShipsReducer from '../features/playerBoard/playerShipsSlice'
import gameReducer from '../features/Game/gameSlice'

export const store = configureStore({
  reducer: {
    game: gameReducer,
    cpuShips: cpuShipsReducer,
    playerShips: playerShipsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
