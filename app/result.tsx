import RouteButton from "@/components/RouteButton";
import WinLoseModal from "@/components/WinLoseModal";
import { View, Text, StyleSheet, Modal } from "react-native";

export default function Result() {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text>Modal Screen</Text>
        <RouteButton route={"/play"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginHorizontal: 16,
  },
  modal: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 5,
    width: "100%",
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "900",
    color: "#FFFFFF",
    padding: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#000000",
    width: "100%",
    borderRadius: 100,
  },
});
