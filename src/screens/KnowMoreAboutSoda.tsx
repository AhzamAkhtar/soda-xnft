import * as React from 'react';
import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  Animated,
} from "react-native";

import {
  createStackNavigator,
  StackCardStyleInterpolator,
} from "@react-navigation/stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Screen } from "../components/Screen";
import { TokenRow } from "../components/TokenRow";

type RootStackParamList = {
  List: {};
  Detail: { id: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export function KnowMoreAboutSoda() {
  return (
    <View style={
      { flex: 1, alignItems: "center", justifyContent: "center" }
    }>
      <Text>Know More About Soda 👇</Text>
      <Text>https://github.com/Web3-Builders-Alliance/soda</Text>
    </View>
  );
}

