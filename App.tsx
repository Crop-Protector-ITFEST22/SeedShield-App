import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Button,
  View,
  Alert,
} from "react-native";

export default function App() {
  const handlePress = () => {
    Alert.alert("You clicked the button!", "Haha yes", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Press me" onPress={handlePress} />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
            width: 200,
            height: 300,
          }}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C8EEBA",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    marginTop: 20,
  },
});
