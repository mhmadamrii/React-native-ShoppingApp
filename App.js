import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Authentication from "./src/screens/Authentication";
import TabNavigation from "./navigation/TabNavigation";
import Cart from "./src/screens/Cart";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
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
              borderWidth: 0              
            },
            headerTitleStyle: {
              color: '#ffff'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
