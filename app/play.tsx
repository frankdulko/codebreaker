import { Image, StyleSheet, Platform, Button, View, TouchableOpacity, Text, SafeAreaView } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from "react-native-reanimated";
import NumberContainer from "@/components/NumberConatiner";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/slices/currentElementSlice";
import GuessRow from "@/components/GuessRow";
import { onBackPressed, onEnterPressed, onNumberKeyPress } from "@/slices/gameSlice";
import NumberKey from "@/components/NumberKey";
import { RootState } from "./store";
import { HView } from "@/components/Views";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";

export default function HomeScreen() {
  const currentGuess = useSelector((state: RootState) => state.game.currentGuess);
  const guessArray = useSelector((state: RootState) => state.game.guessMatrix[currentGuess]);

  const dispatch = useDispatch();

  const isEnterDisabled = guessArray.includes(" ");

  return (
    <SafeAreaView style={{ marginHorizontal: 24 }}>
      <HView>
        <Link href={"/"} asChild>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="door-back" size={24} color="white" />
          </TouchableOpacity>
        </Link>
      </HView>
      <GuessRow guess={0} />
      <GuessRow guess={1} />
      <GuessRow guess={2} />
      <GuessRow guess={3} />
      <GuessRow guess={4} />
      <View style={{ display: "flex", justifyContent: "space-evenly", gap: 16 }}>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", gap: 16 }}>
          <NumberKey number={"1"} />
          <NumberKey number={"2"} />
          <NumberKey number={"3"} />
        </View>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", gap: 16 }}>
          <NumberKey number={"4"} />
          <NumberKey number={"5"} />
          <NumberKey number={"6"} />
        </View>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", gap: 16 }}>
          <NumberKey number={"7"} />
          <NumberKey number={"8"} />
          <NumberKey number={"9"} />
        </View>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", gap: 16 }}>
          <TouchableOpacity
            style={[styles.enterButton, { backgroundColor: isEnterDisabled ? "#AAAAAA" : "#DDDDDD" }]}
            onPress={() => {
              dispatch(onEnterPressed());
            }}
            disabled={isEnterDisabled}
          >
            <Text>{"ENTER"}</Text>
          </TouchableOpacity>
          <NumberKey number={"0"} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch(onBackPressed());
            }}
          >
            <Ionicons name="backspace-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );

  function onKeyPress(key: string) {
    dispatch(onNumberKeyPress(key));
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 20,
    borderRadius: 5,
    flex: 1,
  },
  enterButton: {
    alignItems: "center",
    padding: 20,
    borderRadius: 5,
    flex: 1,
  },
  numberContainer: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: 50,
  },
  numberContainer2: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: 50,
  },
  iconButton: {
    backgroundColor: "#000000",
    padding: 12,
    borderRadius: 100,
  },
});
