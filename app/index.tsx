import { HView } from "@/components/Views";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={{ alignItems: "center", justifyContent: "center", flex: 1, marginHorizontal: 24 }}>
      <Link href={"/play"} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
