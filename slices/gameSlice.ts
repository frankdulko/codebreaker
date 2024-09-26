import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const totalTurns = 6;
const totalNumsPerTurn = 4;

export interface GameState {
  code: string[];
  guessMatrix: [string[], string[], string[], string[], string[], string[]];
  answerMatrix: [string[], string[], string[], string[], string[], string[]];
  currentGuess: number;
  currentIndex: number;
  shouldAnimateContainer: boolean;
  shouldAnimateReveal: boolean;
  showWinLoseModal: boolean;
  shouldReset: boolean;
  didWin: boolean;
}

const initialState: GameState = {
  code: ['1', '2', '3', '4'],
  guessMatrix: [
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
  ],
  answerMatrix: [
    [' ', ' '],
    [' ', ' '],
    [' ', ' '],
    [' ', ' '],
    [' ', ' '],
    [' ', ' '],
  ],
  currentGuess: 0,
  currentIndex: 0,
  shouldAnimateContainer: false,
  shouldAnimateReveal: false,
  showWinLoseModal: false,
  shouldReset: false,
  didWin: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    onNumberKeyPress: (state, key: PayloadAction<string>) => {
      if (state.currentIndex < totalNumsPerTurn) {
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
        state.guessMatrix[state.currentGuess][state.currentIndex] = ' ';
      }
    },
    onEnterPressed: (state) => {
      let correctPositions = 0;
      for (let i = 0; i < totalNumsPerTurn; i++) {
        if (state.code[i] == state.guessMatrix[state.currentGuess][i]) {
          correctPositions++;
        }
      }
      let correctNumbers = 0;
      for (let i = 0; i < totalNumsPerTurn; i++) {
        if (state.code.includes(state.guessMatrix[state.currentGuess][i])) {
          correctNumbers++;
        }
      }
      state.shouldAnimateReveal = true;
      state.answerMatrix[state.currentGuess][0] = correctPositions.toString();
      state.answerMatrix[state.currentGuess][1] = correctNumbers.toString();
      if (state.currentIndex == totalNumsPerTurn) {
        state.currentGuess += 1;
        state.currentIndex = 0;
      }
      if (correctPositions == totalNumsPerTurn) {
        state.showWinLoseModal = true;
        state.didWin = true;
      } else {
        if (state.currentGuess == totalTurns) {
          state.showWinLoseModal = true;
        }
      }
    },
    resetGame: (state) => {
      state.guessMatrix = [
        [' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' '],
      ];
      state.answerMatrix = [
        [' ', ' '],
        [' ', ' '],
        [' ', ' '],
        [' ', ' '],
        [' ', ' '],
        [' ', ' '],
      ];
      state.currentGuess = 0;
      state.currentIndex = 0;
      state.shouldAnimateContainer = false;
      state.shouldAnimateReveal = false;
      state.showWinLoseModal = false;
      state.shouldReset = true;
    },
    onReset: (state) => {
      state.shouldReset = false;
      state.didWin = false;
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
export const {
  onNumberKeyPress,
  onAnimationStarted,
  onBackPressed,
  onEnterPressed,
  resetGame,
  onReset,
  increment,
  decrement,
  incrementByAmount,
} = gameSlice.actions;

export default gameSlice.reducer;
