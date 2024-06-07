import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
const LittleLemonHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#66CCFF",
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
});

export default LittleLemonHeader;
