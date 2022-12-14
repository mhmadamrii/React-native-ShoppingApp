import React from "react";
import { View, Text, Button } from "react-native";

export default function Profile({ navigation }) {
  return (
    <View>
      <Text>Profile screen</Text>
      <Text>Profile screen</Text>
      <Text>Profile screen</Text>
      <Text>Profile screen</Text>
      <Text>Profile screen</Text>
      <Button title="Go to auth" onPress={() => navigation.navigate("Auth")} />
    </View>
  );
}
