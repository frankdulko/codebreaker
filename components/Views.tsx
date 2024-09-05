import { PropsWithChildren } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

type THView = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

export function HView({ style, children }: THView) {
  return <View style={[style, { flexDirection: "row" }]}>{children}</View>;
}
