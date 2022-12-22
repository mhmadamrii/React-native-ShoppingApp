import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Button } from "react-native-elements";

export default function Setting() {
  const [state, setState] = useState([]);

  const url =
    "https://api.unsplash.com/photos/?client_id=lQ5Ib8aUGI3QUQry_JQzCoPG7-laOZzi6SQ7Cy8Wk5k";

  const handleFetch = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setState(json);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(state);
  return (
    <View style={styles.container}>
      <Button title="fetch" onPress={handleFetch} />

      <ScrollView>
        <View>
          {state.map((item) => (
            <>
              <Text key={item.id}>{item.user.bio}</Text>              
            </>
          ))}
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            }}
            style={{ width: 400, height: 400 }}
          />
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1664575602807-e002fc20892c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTEzNzZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY3MTY5MDY3NA&ixlib=rb-4.0.3&q=80&w=1080',
            }}
            style={{ width: 400, height: 400 }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
    marginTop: 60,
  },
});
