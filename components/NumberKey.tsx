import { RootState } from "@/app/store";
import { onNumberKeyPress } from "@/slices/gameSlice";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

type TNumberKey = {
  number: string;
};

export default function NumberKey({ number }: TNumberKey) {
  const dispatch = useDispatch();

  const currentGuess = useSelector((state: RootState) => state.game.currentGuess);
  const guessArray = useSelector((state: RootState) => state.game.guessMatrix[currentGuess]);

  const isKeyDisabled = guessArray.includes(number);

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: isKeyDisabled ? "#AAAAAA" : "#DDDDDD" }]}
      onPress={() => {
        onKeyPress(number);
      }}
      disabled={isKeyDisabled}
    >
      <Text>{number}</Text>
    </TouchableOpacity>
  );

  function onKeyPress(key: string) {
    dispatch(onNumberKeyPress(key));
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 20,
    borderRadius: 5,
    flex: 1,
  },
});
