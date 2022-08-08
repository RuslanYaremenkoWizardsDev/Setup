/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number
  incrementAmount: number
}

const initialState: CounterState = {
  value: 0,
  incrementAmount: 1,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: { value: any; incrementAmount: any; }) => {
      state.value += state.incrementAmount;
    },
    decrement: (state: { value: number; incrementAmount: number; }) => {
      state.value -= state.incrementAmount;
    },
    changeIncrementAmount: (state: { incrementAmount: number; }, action: PayloadAction<number>) => {
      state.incrementAmount = action.payload;
    },
  },
});

export const { increment, decrement, changeIncrementAmount } = counterSlice.actions;

export default counterSlice.reducer;
