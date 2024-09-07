import RouteButton from "@/components/RouteButton";
import { HView } from "@/components/Views";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={{ alignItems: "center", justifyContent: "center", flex: 1, marginHorizontal: 24 }}>
      <RouteButton route={"/play"} />
    </SafeAreaView>
  );
}
