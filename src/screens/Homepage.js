import React, { useState, useEffect, useContext } from "react";
import { Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { ProductContext } from "../context/ProductContext";
import { Badge } from "react-native-paper";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  Image,
  StatusBar,
} from "react-native";

import Carousel from "simple-carousel-react-native";

// custom required stacks
import {
  BannerSkeleton,
  GlobalSearchBar,
  ProductListSkeleton,
} from "../components/globalComponent";
import {
  dataLists,
  bannerHomepage,
  globalString as strings,
} from "../components/applicationdata";
import {
  HeaderSkeleton,
  BodySkeletor,
  ProductSkeleton,
} from "../components/globalComponent";

export default function Homepage() {
  const [refresh, setRefresh] = useState(false);
  const [productItem, setProductItem] = useContext(ProductContext);
  const [productImage, setProductImage] = useState([]);
  const [badge, setBadge] = useState(0);
  const navigation = useNavigation();

  const url = "https://fakestoreapi.com/products?limit=4";

  const pullToRefresh = () => {
    setRefresh(true);
    setBadge(0)

    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  };

  const handleFetch = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setProductImage(json);
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToCart = () => {
    navigation.navigate("Cart");
  };

  useEffect(() => {
    handleFetch();
  }, []);

  console.log("refresh", refresh)

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.innerHeader}>
            <TouchableOpacity onPress={navigateToCart}>
              {badge > 0 ? (
                <Badge style={{ zIndex: 5, marginBottom: -20 }}>{badge}</Badge>
              ) : null}
              <Icon name="shopping-cart" color="#ffff" size={35} />
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
              <View style={styles.specials}>
                <Text style={{ marginTop: 5, marginLeft: 10 }}>
                  {strings.special_dials} ({productImage.length})
                </Text>
                <View style={styles.specialDials}>
                  {productImage.map((item) => (
                    <View key={item.id} style={styles.wrapperSpecial}>
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          height: 140,
                          flexDirection: "column",
                          flex: 1,
                        }}
                      >
                        <Image
                          source={{ uri: item.image }}
                          style={{
                            width: 90,
                            height: 100,
                            marginBottom: "20%",
                          }}
                        />
                        <View style={styles.btnCart}>
                          <Button
                            title={strings.add_to_cart}
                            onPress={() => setBadge(badge + 1)}
                          />
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            )}

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
    marginTop: 10,
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
  specials: {
    marginTop: 10,
    backgroundColor: "#ffff",
    borderRadius: 10,
  },
  specialDials: {
    padding: 10,
    backgroundColor: "#ffff",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 10,
  },
  wrapperSpecial: {
    width: "48%",
    marginBottom: 10,
    backgroundColor: "#D6E4E5",
  },
  btnCart: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
