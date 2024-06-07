import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LittleLemonFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#66CCFF",
    marginBottom: 20,
  },
  footerText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontStyle: "italic",
  },
});
export default LittleLemonFooter;
