import React, { useState, useEffect } from "react";
import Carousel from "simple-carousel-react-native";
import { Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
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

// custom required stacks
import {
  BannerSkeleton,
  GlobalSearchBar,
  ProductListSkeleton,
} from "../components/globalComponent";
import {
  dataLists,
  globalImage,
  bannerHomepage,
  fakeSpecialDials,
  globalString as strings,
} from "../components/applicationdata";
import {
  HeaderSkeleton,
  BodySkeletor,
  ProductSkeleton,
} from "../components/globalComponent";

export default function Homepage() {
  const [refresh, setRefresh] = useState(false);  
  const url = 'https://api.unsplash.com/photos/?client_id=lQ5Ib8aUGI3QUQry_JQzCoPG7-laOZzi6SQ7Cy8Wk5k'
  const navigation = useNavigation();


  const pullToRefresh = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  };

  const handleFetch = async () => {
    try {
      const response = await fetch(url)
      const json = await response.json()
      console.log(json)
    } catch (error) {
      console.log(error)
    }
  };

  const navigateToCart = () => {
    navigation.navigate("Cart")
  }

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.innerHeader}>
            <TouchableOpacity>
              <Icon name="store" color="#ffff" size={35} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="notifications" color="#ffff" size={35} />
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
            {/* category product */}
            {refresh ? (
              <HeaderSkeleton />
            ) : (
              <View style={styles.category}>
                {dataLists.map((item, index) => (
                  <View style={styles.mappedCategory} key={item.id}>
                    <TouchableOpacity>
                      <Image
                        source={item.img}
                        key={index}
                        style={styles.imageDataLists}
                      />
                    </TouchableOpacity>
                    <Text style={{ textAlign: "center", marginTop: 5 }}>
                      {item.name}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            {/* banner */}
            {refresh ? (
              <BannerSkeleton />
            ) : (
              <View style={styles.banner}>
                <View style={styles.carouselBanner}>
                  <Carousel width={330} height={130}>
                    <View style={styles.carouselCore}>
                      <Image
                        source={bannerHomepage.banner_prommotion_1}
                        style={{ width: 320, height: 120, borderRadius: 10 }}
                      />
                    </View>
                    <View style={styles.carouselCore}>
                      <Image
                        source={bannerHomepage.banner_prommotion_2}
                        style={{ width: 320, height: 120, borderRadius: 10 }}
                      />
                    </View>
                  </Carousel>
                </View>
              </View>
            )}

            {/* special dials */}
            {refresh ? (
              <ProductListSkeleton />
            ) : (
              <View>
                <View style={styles.specialDials}>
                  {fakeSpecialDials.map((item) => (
                    <View key={item.id}>
                      {item.complete && (
                        <View style={styles.specialDialsMain}>
                          <Image
                            source={item.img}
                            style={styles.specialDialsImg}
                          />
                          <TouchableOpacity style={{ marginTop: 5 }}>
                            <Button
                              title={strings.check_out}
                              style={{ width: 165 }}
                            />
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              </View>
            )}

            <Button title="fetch here" onPress={navigateToCart} />

            {refresh ? <View></View> : <View></View>}
          </View>
        </ScrollView>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D4C92",
  },
  header: {
    marginTop: 25,
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
    backgroundColor: "#D6E4E5",
    minHeight: 600,
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
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    padding: 10,
    // borderWidth: 1,
    // borderColor: 'red',
    backgroundColor: "#ffff",
    borderRadius: 10,
  },
  carouselBanner: {
    justifyContent: "center",
    alignItems: "center",
  },
  carouselCore: {
    justifyContent: "center",
    alignItems: "center",
  },
  specialDials: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#ffff",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 10,
  },
  specialDialsMain: {
    backgroundColor: "#D6E4E5",
    width: 165,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  specialDialsImg: {
    width: 150,
    height: 150,    
  },
});
