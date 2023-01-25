import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

const Detail = () => {
  const route = useRoute();
  const { id } = route.params;
  const [item, setItem] = useState({});

  useEffect(() => {
    // Fetch the item data here
    // You can use id to fetch the correct item from your data source
    // and set it to the item state variable
    // setItem(data);
  }, []);

  console.log(item)

  return (
    <View>
      <Text>Detail Page</Text>
      <Text>You are viewing item with id: {id}</Text>
      <Text>The title of the item is: {item.title}</Text>
    </View>
  );
};

export default Detail;
