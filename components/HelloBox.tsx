import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HelloBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Mohamed Ahmed 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    margin: 12,
  },
  text: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
});
