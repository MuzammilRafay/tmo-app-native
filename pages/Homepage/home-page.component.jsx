import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  FlatList,
  Button,
} from "react-native";

import Search from "../../components/Search/search";
import Categories from "../../components/Category/categories";
import Cards from "../../components/Cards/cards";
import axios from "axios";
// Load the full build.
var _ = require("lodash");

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.filteredRestaurants = [];
    this.state = {
      restaurants: [],
      categories: [],
      searchField: "",
    };
  }
  componentDidMount() {
    // GET RESTAURANTS
    axios
      .get("https://techmyorder.com/tmo_api/response_restaurant")
      .then((response) => {
        const { data } = response;
        // console.log(data, "Restaurants");
        this.setState({
          restaurants: data,
        });
      })
      .catch((error) => console.error(error));
    // GET CATEGORIES
    axios
      .get("https://techmyorder.com/tmo_api/response_category")
      .then((response) => {
        const { data } = response;
        this.setState({
          categories: data,
        });
      })
      .catch((error) => console.error(error));
  }
  onSearch = (event) => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const { restaurants, searchField } = this.state;
    let filteredRestaurants = [...restaurants];
    let filteredRestaurantsResult = filteredRestaurants.filter((restaurant) => {
      restaurant.name.toLowerCase().includes(searchField.toLowerCase());
    });
    // console.log(filteredRestaurantsResult, "filteredRestaurantsResult");

    return (
      <SafeAreaView style={styles.safeAreaViewMargin}>
        {/* <View>
          <Button
            title="Navigate Screen"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View> */}
        <ScrollView style={styles.container}>
          <View>
            <Search onChange={this.onSearch} />
            <Text style={styles.categoryHeading}>Top Categories</Text>
            <Categories data={this.state.categories} />

            <FlatList
              data={this.state.restaurants}
              renderItem={({ item }) => (
                <View
                  onClick={() => {
                    this.props.navigation.navigate("Details", {
                      itemId: item.id,
                      otherParam: item.link,
                    });
                  }}
                >
                  <Cards key={item.id} image={item.image} title={item.name} />
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.cardContainerStyleTwo}
              numColumns={2}
            />
          </View>
        </ScrollView>

        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            // onPress={this.clickHandler}
            style={styles.TouchableOpacityStyle}
          >
            <View style={styles.buttonContainer}>
              <Image
                source={require("../.././assets/resources2/photoshop/arrow-icon.png")}
                style={styles.buttonBottom}
              />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaViewMargin: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
  },
  cardContainerStyleTwo: {
    flex: 1,
    flexGrow: 1,
  },
  categoryHeading: {
    color: "black",
    fontSize: "20px",
    fontWeight: "700",
    marginTop: 20,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
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

export default HomePage;
