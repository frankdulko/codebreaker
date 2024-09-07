import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GameState {
  code: string[];
  guessMatrix: [string[], string[], string[], string[], string[]];
  answerMatrix: [string[], string[], string[], string[], string[]];
  currentGuess: number;
  currentIndex: number;
  shouldAnimateContainer: boolean;
  shouldAnimateReveal: boolean;
  showWinLoseModal: boolean;
}

const initialState: GameState = {
  code: ["1", "2", "3", "4"],
  guessMatrix: [
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
  ],
  answerMatrix: [
    [" ", " "],
    [" ", " "],
    [" ", " "],
    [" ", " "],
    [" ", " "],
  ],
  currentGuess: 0,
  currentIndex: 0,
  shouldAnimateContainer: false,
  shouldAnimateReveal: false,
  showWinLoseModal: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    onNumberKeyPress: (state, key: PayloadAction<string>) => {
      if (state.currentIndex < 4) {
        state.shouldAnimateContainer = true;
        state.guessMatrix[state.currentGuess][state.currentIndex] = key.payload;
        state.currentIndex += 1;
      }
    },
    onAnimationStarted: (state) => {
      state.shouldAnimateContainer = false;
      state.shouldAnimateReveal = false;
    },
    onBackPressed: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
        state.guessMatrix[state.currentGuess][state.currentIndex] = " ";
      }
    },
    onEnterPressed: (state) => {
      let correctPositions = 0;
      for (let i = 0; i < 4; i++) {
        if (state.code[i] == state.guessMatrix[state.currentGuess][i]) {
          correctPositions++;
        }
      }
      let correctNumbers = 0;
      for (let i = 0; i < 4; i++) {
        if (state.code.includes(state.guessMatrix[state.currentGuess][i])) {
          correctNumbers++;
        }
      }
      state.shouldAnimateReveal = true;
      if (correctPositions == 4) {
        state.showWinLoseModal = true;
      } else {
        state.answerMatrix[state.currentGuess][0] = correctPositions.toString();
        state.answerMatrix[state.currentGuess][1] = correctNumbers.toString();
        if (state.currentIndex == 4) {
          state.currentGuess += 1;
          state.currentIndex = 0;
        }
      }
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //   if (state.element < 4) {
      //     state.element += 1;
      //   } else {
      //     state.element = 0;
      //     state.guess += 1;
      //   }
    },
    decrement: (state) => {
      //   if (state.element > 0) {
      //     state.element -= 1;
      //   }
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {},
  },
});

// Action creators are generated for each case reducer function
export const { onNumberKeyPress, onAnimationStarted, onBackPressed, onEnterPressed, increment, decrement, incrementByAmount } = gameSlice.actions;

export default gameSlice.reducer;
