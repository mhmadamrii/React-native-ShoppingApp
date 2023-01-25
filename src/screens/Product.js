import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  PermissionsAndroid,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const AndroPermissions = () => {
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.PERMISSIONS.ACCESS_FINE_LOCATION
        // {
        //   title: "Cool Photo App Camera Permission",
        //   message:
        //     "Cool Photo App needs access to your camera " +
        //     "so you can take awesome pictures.",
        //   buttonNeutral: "Ask Me Later",
        //   buttonNegative: "Cancel",
        //   buttonPositive: "OK",
        // }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Text>Try permissions</Text>
      <Button title="request permissions" onPress={requestCameraPermission} />
    </>
  );
};

export default function Product() {
  const navigation = useNavigation();

  const handlePress = (id) => {
    navigation.navigate("Detail", { id });
  };

  const [data, setData] = useState([
    { id: 1, title: "First Item" },
    { id: 2, title: "Second Item" },
    { id: 3, title: "Third Item" },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.id)}>
      <Text style={{ fontSize: 30, marginVertical: 40 }}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <>
      {/* <View>
        <Text>Hello world</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View> */}
      <AndroPermissions />
    </>
  );
}
