import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import MenuItems from "./components/MenuItems";
import Login from "./components/Login";

const Stack = createStackNavigator();
function MenuItemsScreen() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen name="MenuItems" component={MenuItems} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <LittleLemonHeader />
      <View style={styles.container}>
        <MenuItemsScreen />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footerContainer: { backgroundColor: "#333333" },
});
