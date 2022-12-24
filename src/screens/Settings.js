import React, { useState } from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";

export default function Settings() {
  const [state, setState] = useState([]);
  const [imageState, setImage] = useState([])

  const url = "https://fakestoreapi.com/products";
  const handleFetch = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setState(json);
    } catch (error) {
      console.log(error);
    }
  };


  const handleImage = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg")
      const data = await res.blob()
      setImage(URL.createObjectURL(data))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <React.Fragment>
      <View style={{ marginTop: 100 }}>
        <Button title="Fetch" onPress={handleFetch} />
        <Button title="Fetch Image" onPress={handleImage} />
        <ScrollView>
          {state.map((item) => (
            <View key={item.id}>
              <Text>{item.title}</Text>
              <Image source={item.image} />
            </View>
          ))}

          {imageState ? (
            <Image source={{ uri: imageState }} style={{ width: 200, height: 200 }} />
          ) : <Text>empty</Text>}
        </ScrollView>
      </View>
    </React.Fragment>
  );
}
