import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Search from "./components/search";
import Categories from "./components/categories";
import Cards from "./components/cards";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const restaurantURL = "https://techmyorder.com/tmo_api/response_restaurant";
  useEffect(() => {
    fetch(restaurantURL)
      .then((response) => {
        console.log(response);
      })
      .then((json) => {
        setRestaurants(json);
        console.log(json);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        // alert('working')
      });
  }, []);

  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        margin: 10,
      }}
    >
      <ScrollView style={styles.container}>
        <View>
          <Search />
          <Text style={styles.categoryHeading}>Top Categories</Text>
          <Categories />
          <View style={styles.cardContainer}>
            <Cards image={"working"} title={"Berlin Donor Gyro - DHA"} />
            <Cards
              image={"working"}
              title={"The Cricket Club Cafe - Zamzama"}
            />
          </View>
          <View style={styles.cardContainer}>
            <Cards image={"working"} title={"McDonalads - Sea View"} />
            <Cards image={"working"} title={"KFC - Boat Basin"} />
          </View>
          <View style={styles.cardContainer}>
            <Cards image={"working"} title={"McDonalads - Sea View"} />
            <Cards image={"working"} title={"KFC - Boat Basin"} />
          </View>
          <View style={styles.cardContainer}>
            <Cards image={"working"} title={"McDonalads - Sea View"} />
            <Cards image={"working"} title={"KFC - Boat Basin"} />
          </View>
        </View>
      </ScrollView>

      <View
      >
        <TouchableOpacity
          activeOpacity={0.7}
          // onPress={this.clickHandler}
          style={styles.TouchableOpacityStyle}
        >
          <View style={styles.buttonContainer}>
            <Image
              source={require("./assets/resources2/photoshop/arrow-icon.png")}
              style={styles.buttonBottom}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
  },
  categoryHeading: {
    color: "black",
    fontSize: "20px",
    fontWeight: "700",
    marginTop: 20,
    flex: 1,
    justifyContent: "start",
    alignItems: "start",
    marginLeft: 14,
  },
  buttonBottom: {
    // height: "100px",
    // width: "50px",
    // borderRadius: "50",
    // backgroundColor: "#cd1e4b",
    // borderRadius: '20px',
    // marginRight: '12px',
    // position: 'absolute',
    // bottom: '20px',
    // height: '40px',
    // width: '40px',
    resizeMode: "contain",
    width: "30px",
    height: "30px",
    paddingRight: "10px",
    // backgroundColor: "#cd1e4b",
    // borderRadius:'20px'
  },
  buttonContainer: {
    backgroundColor: "#cd1e4b",
    borderRadius: "40px",
    width: "46px",
    height: "42px",
    paddingTop: "4px",
    paddingLeft: "8px",
  },
  TouchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },
});

export default App;
