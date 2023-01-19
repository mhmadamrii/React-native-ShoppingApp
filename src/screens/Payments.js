import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import Stepper from "react-native-stepper-ui";

const StepperComponent = (props) => {
  const { title } = props;

  return (
    <>
      <View>
        <Text>{props.title}</Text>
      </View>
    </>
  );
};

const contentStepper = [
  <StepperComponent title="Component 1" />,
  <StepperComponent title="Component 2" />,
  <StepperComponent title="Component 3" />,
];

export default function Payment() {
  const [active, setActive] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 30 }}>
        <Stepper
          active={active}
          content={contentStepper}
          onBack={() => setActive((p) => p - 1)}
          onFinish={() => alert("finish")}
          onNext={() => setActive((p) => p + 1)}
          // showButton={false}
          buttonStyle={{
            // marginRight: 5,
            marginLeft: 90,
            borderWidth: 1,
            borderColor: "red",
            // padding: 100
            justifyContent: 'center'
          }}
        />
      </View>
      <View>
        <Button title="next" onPress={() => setActive((p) => p + 1)} />
        <Button title="previous" onPress={() => setActive((p) => p - 1)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
