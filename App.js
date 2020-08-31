// import React, { Component } from "react";
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./pages/Homepage/home-page.component";
import HomeDetail from "./pages/HomeDetail/home-detail.component";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"

        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: "#f4511e",
        //   },
        //   headerTintColor: "#fff",
        //   headerTitleStyle: {
        //     fontWeight: "bold",
        //   },
        // }}
      >
        <Stack.Screen
          name="Home"
          component={HomePage}
          // options={{ title: "TMO" }}
          name="TMO APP"
          // options={{
          //   title: "My home",
          //   headerStyle: {
          //     backgroundColor: "#f4511e",
          //   },
          //   headerTintColor: "#fff",
          //   headerTitleStyle: {
          //     fontWeight: "bold",
          //   },
          // }}
        />
        <Stack.Screen
          name="Details"
          component={HomeDetail}
          initialParams={{ itemId: 0, link: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
