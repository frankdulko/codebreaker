import { Href, Link } from "expo-router";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type TRouteButton = {
  route: Href<string>;
};

export default function RouteButton({ route }: TRouteButton) {
  return (
    <Link href={route} asChild>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
    </Link>
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
