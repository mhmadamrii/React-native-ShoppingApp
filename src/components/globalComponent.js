import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { SearchBar } from "react-native-elements";

export const GlobalSearchBar = (props) => {
  const { isRound, bg } = props;

  return (
    <React.Fragment>
      <View
        style={{          
          height: 30,          
          borderRadius: isRound ? 10 : 0,
          backgroundColor: bg ? bg : 'black'
        }}
      >
        <TextInput />        
      </View>
    </React.Fragment>
  );
};

export default class globalComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <Text>Global Component</Text>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  globalSearchBar: {
    borderWidth: 1,
    borderColor: "red",
  },
});
