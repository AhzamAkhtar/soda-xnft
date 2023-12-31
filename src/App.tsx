import * as React from 'react';
import { registerRootComponent } from "expo";
import { RecoilRoot } from "recoil";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts, Inter_900Black } from "@expo-google-fonts/dev";

import { ExamplesScreens } from "./screens/ExamplesScreen";
import {  HomeScreen} from "./screens/HomeScreen";
import { KnowMoreAboutSoda } from "./screens/KnowMoreAboutSoda";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={
       { tabBarActiveTintColor: "#e91e63"}
      }
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={
          {tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          )}
        }
      />
      <Tab.Screen
        name="List"
        component={KnowMoreAboutSoda}
        options={
          {headerShown: false,
          tabBarLabel: "Soda",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bottle-soda-classic-outline" size={24} color="black" />
          )}
        }
      />
      <Tab.Screen
        name="Examples"
        component={ExamplesScreens}
        options={
          {tabBarLabel: "Examples",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )}
        }
      />
    </Tab.Navigator>
  );
}

function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return (
      <View style={
        { flex: 1, alignItems: "center", justifyContent: "center" }
      }>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <RecoilRoot>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default registerRootComponent(App);
