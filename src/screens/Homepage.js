import React, { useState } from "react";
import { GlobalSearchBar } from "../components/globalComponent";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  TextInput,
  ActivityIndicator,
  Image,
} from "react-native";

const dataLists = [
  {
    id: 1,
    texts: "Lorem ipsum dolor sit ammet",
    img: require("../../assets/chat.png"),
  },
  {
    id: 2,
    texts: "Test lorem ipsum dolor sit ammet heheheh",
    img: require("../../assets/fb.png"),
  },
];

export default function Homepage() {
  const [refresh, setRefresh] = useState(false);

  const pullToRefresh = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text>Header here</Text>
          </View>

          <View>
            <GlobalSearchBar isRound={true} bg="#ffff" />
          </View>
        </View>

        <ScrollView
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={pullToRefresh} />
          }
        >
          <View style={styles.wrapper}>
            {dataLists.map((item) => (
              <View>
                <Text>{item.texts}</Text>
                <Image source={item.img} />
              </View>
            ))}
          </View>
          <View>
            <Text>Here we go</Text>
          </View>
        </ScrollView>
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
    padding: 10,
  },
  wrapper: {
    flex: 1,
    borderRadius: 25,
    marginTop: 20,
    padding: 10,
    backgroundColor: "#ffff",
    minHeight: 1000,
  },
});
