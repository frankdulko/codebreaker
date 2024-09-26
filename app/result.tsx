import RouteButton from '@/components/RouteButton';
import WinLoseModal from '@/components/WinLoseModal';
import { resetGame } from '@/slices/gameSlice';
import { router } from 'expo-router';
import { View, Text, StyleSheet, Modal, ModalProps } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';

type TResultModal = ModalProps & {};

export default function ResultModal() {
  const dispatch = useDispatch();
  const showWinLoseModal = useSelector((state: RootState) => state.game.showWinLoseModal);
  const code = useSelector((state: RootState) => state.game.code);
  const didWin = useSelector((state: RootState) => state.game.didWin);
  const title = didWin ? 'You Got It!' : 'Not Quite...';

  return (
    <Modal
      visible={showWinLoseModal}
      transparent
      animationType="fade"
      statusBarTranslucent
      style={styles.container}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.title}>{title}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8 }}>
            <View style={styles.numberContainer}>
              <Text style={{ fontSize: 22 }}>{code[0]}</Text>
            </View>
            <View style={styles.numberContainer}>
              <Text style={{ fontSize: 22 }}>{code[1]}</Text>
            </View>
            <View style={styles.numberContainer}>
              <Text style={{ fontSize: 22 }}>{code[2]}</Text>
            </View>
            <View style={styles.numberContainer}>
              <Text style={{ fontSize: 22 }}>{code[3]}</Text>
            </View>
          </View>
          <RouteButton
            onPress={() => {
              dispatch(resetGame());
            }}
            text={'Play Again'}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  modal: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 5,
    width: '100%',
    gap: 16,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFFFFF',
    padding: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000000',
    width: '100%',
    borderRadius: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
  },
  numberContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 3,
    width: 40,
    height: 40,
  },
});
