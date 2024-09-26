import Animated, {
  Easing,
  Keyframe,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { Text, StyleSheet, View } from 'react-native';
import { Key, PropsWithChildren, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { onAnimationStarted, onReset } from '@/slices/gameSlice';
import uuid from 'react-native-uuid';

type TRevealContainer = PropsWithChildren<{
  guess: number;
  isCorrectPositions: boolean;
}>;

export default function RevealContainer({ guess, isCorrectPositions, children }: TRevealContainer) {
  const currentGuess = useSelector((state: RootState) => state.game.currentGuess);
  const shouldAnimateReveal = useSelector((state: RootState) => state.game.shouldAnimateReveal);
  const shouldReset = useSelector((state: RootState) => state.game.shouldReset);
  const dispatch = useDispatch();

  const color = isCorrectPositions ? '#6ca965' : '#c8b653';

  const [container, setContainer] = useState(
    <View style={[styles.container, { backgroundColor: '#DDDDDD' }]}></View>,
  );

  const enteringAnimation = new Keyframe({
    0: {
      transform: [{ rotateX: '0deg' }],
      backgroundColor: '#DDDDDD',
    },
    45: {
      transform: [{ rotateX: '90deg' }],
      backgroundColor: '#DDDDDD',
    },
    55: {
      transform: [{ rotateX: '90deg' }],
      backgroundColor: color,
    },
    100: {
      transform: [{ rotateX: '0deg' }],
      backgroundColor: color,
    },
  })
    .duration(1000)
    .delay(isCorrectPositions ? 0 : 250);

  const textEnteringAnimation = new Keyframe({
    0: {
      opacity: 0,
    },
    45: {
      opacity: 0,
    },
    55: {
      opacity: 1,
    },
    100: {
      opacity: 1,
    },
  })
    .duration(1000)
    .delay(isCorrectPositions ? 0 : 250);

  useEffect(() => {
    if (shouldAnimateReveal) {
      if (guess == currentGuess - 1) {
        setContainer(
          <Animated.View entering={enteringAnimation} style={[styles.container]}>
            <Animated.Text entering={textEnteringAnimation} style={{ fontSize: 22 }}>
              {children}
            </Animated.Text>
          </Animated.View>,
        );
        dispatch(onAnimationStarted());
      }
    }
  }, [shouldAnimateReveal]);

  useEffect(() => {
    if (shouldReset) {
      setContainer(<View style={[styles.container, { backgroundColor: '#DDDDDD' }]}></View>);
      dispatch(onReset());
    }
  }, [shouldReset]);

  return container;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: 45,
    height: 45,
  },
});
