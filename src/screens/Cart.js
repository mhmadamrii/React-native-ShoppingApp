import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
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

          <View style={styles.bottomShowButton}>
            <View style={styles.bottomButton}>
              <Button title={strings.check_out} />
            </View>
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
    minHeight: 800,
  },
  bottomShowButton: {    
    borderWidth: 1,
    borderColor: 'red',
    // marginTop: '150%'
  },
  bottomButton: {    
    width: '100%',
    top: 700
  }
});
