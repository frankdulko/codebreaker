import { RootState } from "@/app/store";
import { increment } from "@/slices/currentElementSlice";
import { onAnimationStarted } from "@/slices/gameSlice";
import { transform } from "@babel/core";
import { PropsWithChildren, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";

type TNumberContainer = PropsWithChildren<{
  guess: number;
  index: number;
}>;

export default function NumberContainer({ guess, index, children }: TNumberContainer) {
  const scale = useSharedValue(1);

  const currentGuess = useSelector((state: RootState) => state.game.currentGuess);
  const currentIndex = useSelector((state: RootState) => state.game.currentIndex);
  const shouldAnimateContainer = useSelector((state: RootState) => state.game.shouldAnimateContainer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (shouldAnimateContainer) {
      if (guess == currentGuess && index == currentIndex - 1) {
        scale.value = withRepeat(withTiming(scale.value * 1.11, { duration: 200 }), 2, true);
        dispatch(onAnimationStarted());
      }
    }
  }, [shouldAnimateContainer]);

  return (
    <Animated.View style={[styles.container, { transform: [{ scale: scale }] }]}>
      <Text style={{ fontSize: 22 }}>{children}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    width: 40,
    height: 40,
  },
});
