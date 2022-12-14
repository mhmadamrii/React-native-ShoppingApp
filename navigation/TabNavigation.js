import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

// tab screens
import Homepage from "../src/screens/Homepage";
import Profile from "../src/screens/Profile";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {


  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor: '#0D4C92'
    }}
    >
      <Tab.Screen
        name="Homepage"
        component={Homepage}
        options={{
          headerShown: false,
          tabBarColor: '#3333cc',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={40} />
          )
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Homepage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={40} />
          )
        }}
      />
      <Tab.Screen
        name="Payments"
        component={Homepage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="payments" size={40} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={40} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}