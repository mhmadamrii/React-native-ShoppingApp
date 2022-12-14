import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Homepage() {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Some header here</Text>
        </View>

        <View style={styles.wrapper}>
          <View>
            <Text>Main wrapper</Text>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,    
    backgroundColor: "#0D4C92",
  },
  header: {
    marginTop: 20,
    // flex: 2,
    padding: 10
  },
  wrapper: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'red',
    borderRadius: 25,
    marginTop: 100,
    padding: 10,
    backgroundColor: '#ffff'
  },
});
