import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ProductProvider } from "./src/context/ProductContext";

const Stack = createStackNavigator();

import Authentication from "./src/screens/Authentication";
import TabNavigation from "./navigation/TabNavigation";
import Cart from "./src/screens/Cart";


import Product from "./src/screens/Product";
import Detail from "./src/screens/Details";


export default function App() {
  return (
    <ProductProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="Auth"
            component={Authentication}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TabNavigation"
            component={TabNavigation}
            options={{ headerShown: false, title: " " }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: "#0D4C92",
                borderWidth: 0,
              },
              headerTitleStyle: {
                color: "#ffff",
              },
            }}
          /> */}

          <Stack.Screen name="product" component={Product} />
          <Stack.Screen name="Detail" component={Detail} options={({route}) => ({ title: route.params.id })} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
}
