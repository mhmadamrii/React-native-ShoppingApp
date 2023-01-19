import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform} from 'react-native'

export default function Profile() {
  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Profile screen</Text>
        </View>
      </SafeAreaView>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
})