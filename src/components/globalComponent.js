import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { SearchBar } from "react-native-elements";
import { Skeleton } from "@rneui/themed";

export const GlobalSearchBar = (props) => {
  const { isRound, bg, height } = props;

  return (
    <React.Fragment>
      <View
        style={{
          height: 35,
          borderRadius: isRound ? 10 : 0,
          backgroundColor: bg ? bg : "black",
        }}
      >
        <TextInput
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            fontSize: 17,
          }}
          placeholder="Search here"
        />
      </View>
    </React.Fragment>
  );
};

export const HeaderSkeleton = () => {
  return (
    <View style={styles.main}>
      <Skeleton
        circle
        animation="wave"
        width={80}
        height={80}
        style={styles.circleSkeleton}
      />
      <Skeleton
        circle
        animation="wave"
        width={80}
        height={80}
        style={styles.circleSkeleton}
      />
      <Skeleton
        circle
        animation="wave"
        width={80}
        height={80}
        style={styles.circleSkeleton}
      />
      <Skeleton
        circle
        animation="wave"
        width={80}
        height={80}
        style={styles.circleSkeleton}
      />
    </View>
  );
};

export const BodySkeleton = () => {
  return (
    <View style={styles.bodySkeleton}>
      <Skeleton
        animation="wave"
        width={330}
        height={100}
        style={styles.bodySkeletonSmall}
      />
      <Skeleton
        animation="wave"
        width={330}
        height={30}
        style={styles.bodySkeletonSmall}
      />
      <Skeleton
        animation="wave"
        width={240}
        height={30}
        style={styles.bodySkeletonSmall}
      />
    </View>
  );
};

export const ProductsSkeleton = () => {
  return (
    <View style={styles.productsSkeleton}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Skeleton
          animation="wave"
          width={150}
          height={100}
          style={styles.productsSkeletonSmall}
        />
        <Skeleton
          animation="wave"
          width={100}
          height={10}
          style={{ marginTop: 5 }}
        />
        <Skeleton
          animation="wave"
          width={150}
          height={10}
          style={{ marginTop: 5 }}
        />
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Skeleton
          animation="wave"
          width={150}
          height={100}
          style={styles.productsSkeletonSmall}
        />
        <Skeleton
          animation="wave"
          width={100}
          height={10}
          style={{ marginTop: 5 }}
        />
        <Skeleton
          animation="wave"
          width={150}
          height={10}
          style={{ marginTop: 5 }}
        />
      </View>
    </View>
  );
};

export const ProductListSkeleton = () => {
  return (
    <View style={styles.productListSkeleton}>
      <View>
        <Skeleton
          animation="wave"
          width={150}
          height={150}
          style={{ marginTop: 10, borderRadius: 10 }}
        />
        <Skeleton
          animation="wave"
          width={150}
          height={10}
          style={{ marginTop: 10 }}
        />
      </View>

      <View>
        <Skeleton
          animation="wave"
          width={150}
          height={150}
          style={{ marginTop: 10, borderRadius: 10 }}
        />
        <Skeleton
          animation="wave"
          width={150}
          height={10}
          style={{ marginTop: 10 }}
        />
      </View>
    </View>
  );
};

export const BannerSkeleton = () => {
  return (
    <View style={styles.bannerSkeleton}>
      <Skeleton animation="wave" style={styles.bodySkeletonLarge} />
    </View>
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
  main: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  bodySkeleton: {
    marginBottom: 40,
  },
  bodySkeletonSmall: {
    marginBottom: 10,
  },
  circleSkeleton: {
    marginHorizontal: 2,
  },
  productsSkeleton: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  productsSkeletonSmall: {
    alignItems: "center",
    justifyContent: "center",
  },
  bannerSkeleton: {},
  bodySkeletonLarge: {
    borderRadius: 10,
    height: 140,
  },
  productListSkeleton: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    minHeight: 190,
    flexDirection: "row",
  },
});
