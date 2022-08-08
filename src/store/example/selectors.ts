import { RootState } from '../index';

export const countSelector = (state: RootState) => state.counter.value;
export const amountSelector = (state: RootState) => state.counter.incrementAmount;
