import { RootState } from "@/app/store";
import { onNumberKeyPress } from "@/slices/gameSlice";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import KeyButton from "./KeyButton";

export type TNumberKey = {
  number: string;
};

export default function NumberKey({ number }: TNumberKey) {
  const dispatch = useDispatch();

  const currentGuess = useSelector((state: RootState) => state.game.currentGuess);
  const guessArray = useSelector((state: RootState) => state.game.guessMatrix[currentGuess]);

  const isKeyDisabled = guessArray.includes(number);

  return (
    <TouchableOpacity
      onPress={() => {
        onKeyPress(number);
      }}
      disabled={isKeyDisabled}
    >
      <KeyButton number={number} />
    </TouchableOpacity>
  );

  function onKeyPress(key: string) {
    dispatch(onNumberKeyPress(key));
  }
}

const styles = StyleSheet.create({});
