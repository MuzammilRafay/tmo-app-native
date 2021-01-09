// import React, { Component } from "react";
import "react-native-gesture-handler";
import * as React from "react";
import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./pages/Homepage/home-page.component";
import HomeDetail from "./pages/HomeDetail/home-detail.component";
const entireScreenWidth = Dimensions.get("window").width;
// Rem Screen Divided
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

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
          // name="TMO APP"
          options={{
            title: "",
            headerStyle: {
              // backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="HomeDetail"
          component={HomeDetail}
          options={{
            title: "",
            headerStyle: {
              // backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          // initialParams={{ itemId: 0, link: "https://google.com" }}
          initialParams={{ itemId: 0, link: "https://google.com" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
