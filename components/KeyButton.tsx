import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet } from "react-native";
import { TNumberKey } from "./NumberKey";

export default function KeyButton({ number }: TNumberKey) {
  return (
    <LinearGradient style={styles.button} colors={["#737373", "#D9D9D9"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
      <View style={styles.buttonTopHighlight}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#A3A3A3", "#E8E8E8"]} style={styles.buttonTop}>
          <Text style={styles.text}>{number}</Text>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonTop: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  buttonTopHighlight: {
    width: 63,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
    padding: 8,
  },
});
