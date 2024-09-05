import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ElementState {
  guess: number;
  element: number;
}

const initialState: ElementState = {
  guess: 0,
  element: 0,
};

export const currentElementSlice = createSlice({
  name: "element",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.element < 4) {
        state.element += 1;
      } else {
        state.element = 0;
        state.guess += 1;
      }
    },
    decrement: (state) => {
      if (state.element > 0) {
        state.element -= 1;
      }
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {},
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = currentElementSlice.actions;

export default currentElementSlice.reducer;
