import { Href, Link } from 'expo-router';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type TRouteButton = {
  route?: Href<string>;
  onPress: () => void;
  text: string;
};

export default function RouteButton({ onPress, text }: TRouteButton) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
});
