import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import { globalString as strings } from "../components/applicationdata";

export default function Cart() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.headerShowProducts}>
            <Text>LIST PRODUCTS</Text>
          </View>

          <Text>Total:</Text>
          <View style={styles.fixedButton}>
            <Button title={strings.check_out} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D4C92",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#D6E4E5",
    borderRadius: 20,
    padding: 10,
    minHeight: "100%",
  },
  bottomShowButton: {
    borderWidth: 1,
    borderColor: "red",
    // marginTop: '150%'
  },
  bottomButton: {
    width: "100%",
    top: 700,
  },
  fixedButton: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    height: 100,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItes: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
  },
});
