import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface KeyPressState {
  didPressKey: boolean;
}

const initialState: KeyPressState = {
  didPressKey: false,
};

export const keyPressSlice = createSlice({
  name: "keyPress",
  initialState,
  reducers: {
    onKeyPressed: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.didPressKey = true;
    },
    tobedeleted: (state) => {
      state.didPressKey = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onKeyPressed, tobedeleted } = keyPressSlice.actions;

export default keyPressSlice.reducer;
