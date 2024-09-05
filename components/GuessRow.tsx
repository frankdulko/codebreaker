import { Animated, View, Text } from "react-native";
import NumberContainer from "./NumberConatiner";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import RevealContainer from "./RevealContainer";

type TGuessRow = {
  guess: number;
};

export default function GuessRow({ guess }: TGuessRow) {
  const guessArray = useSelector((state: RootState) => state.game.guessMatrix[guess]);

  const revealMatrix = useSelector((state: RootState) => state.game.answerMatrix);

  return (
    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }}>
      <NumberContainer guess={guess} index={0}>
        {guessArray[0]}
      </NumberContainer>
      <NumberContainer guess={guess} index={1}>
        {guessArray[1]}
      </NumberContainer>
      <NumberContainer guess={guess} index={2}>
        {guessArray[2]}
      </NumberContainer>
      <NumberContainer guess={guess} index={3}>
        {guessArray[3]}
      </NumberContainer>
      <RevealContainer guess={guess} isCorrectPositions>
        {revealMatrix[guess][0]}
      </RevealContainer>
      <RevealContainer guess={guess} isCorrectPositions={false}>
        {revealMatrix[guess][1]}
      </RevealContainer>
    </View>
  );
}
