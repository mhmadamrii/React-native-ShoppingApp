import React, { useState, useEffect } from "react";
import { GlobalSearchBar } from "../components/globalComponent";
import { dataLists, globalImage } from "../components/applicationdata";
import { Icon } from "react-native-elements";
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
import Carousel from 'react-native-reanimated-carousel';

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
          <View style={styles.innerHeader}>
            <TouchableOpacity>
              <Icon name="menu" color="#ffff" size={35} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="store" color="#ffff" size={35} />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 10 }}>
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
            <View style={styles.category}>
              {dataLists.map((item, index) => (
                <View style={styles.mappedCategory}>
                  <Image
                    source={item.img}
                    key={index}
                    style={styles.imageDataLists}
                  />
                  <Text style={{ textAlign: 'center', marginTop: 5 }}>{item.name}</Text>
                </View>
              ))}
            </View>

            <View style={styles.banner}>
              
            </View>
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
  innerHeader: {
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: 'red',
    justifyContent: "space-between",
  },
  headerImg: {
    width: 30,
    height: 30,
  },
  wrapper: {
    flex: 1,
    borderRadius: 25,
    marginTop: 20,
    padding: 10,
    backgroundColor: "#EFF5F5",
    minHeight: 1000,
  },
  category: {
    // borderWidth: 1,
    // borderColor: "red",
    justifyContent: "space-evenly",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#ffff",
    borderRadius: 10,
  },
  imageDataLists: {
    width: 50,
    height: 50,
  },
  mappedCategory: {
    // borderWidth: 1,
    // borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  banner: {

  }
});
