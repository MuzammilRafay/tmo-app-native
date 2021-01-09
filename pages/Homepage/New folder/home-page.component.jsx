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
  TouchableHighlight,
  ActivityIndicator,
  Alert,
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
      isLoadingCategory: true,
      isLoadingRestaurant: true,
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
          isLoadingRestaurant: false,
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
          isLoadingCategory: false,
        });
      })
      .catch((error) => console.error(error));
  }
  onSearch = (text) => {
    this.setState({
      searchField: text,
      isLoadingRestaurant: true,
    });
    //search Api
    axios
      .post(`https://techmyorder.com/tmo_api/api/restaurants/search/post`, {
        name: text,
      })
      .then((response) => {
        const { data } = response;
        this.setState({
          restaurants: data,
          isLoadingRestaurant: false,
        });
      })
      .catch((error) => console.error(error));
  };
  onCategoryClick = (item) => {
    // const categories = { ...this.state.categories };
    const itemParametter = item;
    const categories = [...this.state.categories];
    const categoryexist = categories.find(
      (category) => category.id == itemParametter.id
    );
    if (categoryexist) {
      // console.log(itemParametter.id, "itemParametter");
      categories.map((category) => {
        category.id == itemParametter.id
          ? { ...category, clickedCheck: "pressed" }
          : category;
      });
      // this.setState({ categories: categories }, console.log(categories));
      this.setState({ categories: categories });
    }
    this.setState({ isLoadingRestaurant: true });
    axios
      .get(
        `https://techmyorder.com/tmo_api/api/categories_restaurant/${itemParametter.id}`
      )
      .then((response) => {
        const { data } = response;
        this.setState({
          restaurants: data,
          isLoadingRestaurant: false,
        });
      })
      .catch((error) => console.error(error));
  };
  render() {
    const {
      restaurants,
      searchField,
      isLoadingCategory,
      isLoadingRestaurant,
    } = this.state;
    return (
      <SafeAreaView style={styles.safeAreaViewMargin}>
        <ScrollView style={styles.container}>
          <View>
            <Search onChange={this.onSearch} />
            <Text style={styles.categoryHeading}>Top Categories</Text>

            {isLoadingCategory && (
              <ActivityIndicator
                style={{ height: 80 }}
                color="#bf2246"
                size="large"
              />
            )}
            <Categories
              data={this.state.categories}
              onCategoryClick={this.onCategoryClick}
            />
            {isLoadingRestaurant && (
              <ActivityIndicator
                style={{ height: 80 }}
                color="#bf2246"
                size="large"
              />
            )}
            <FlatList
              data={this.state.restaurants}
              renderItem={({ item }) => (
                <View>
                  <TouchableHighlight
                    onPress={() => {
                      this.props.navigation.navigate("HomeDetail", {
                        itemId: item.id,
                        otherParam: item.link,
                      });
                    }}
                    underlayColor="white"
                  >
                    <Cards key={item.id} image={item.image} title={item.name} />
                  </TouchableHighlight>
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
    // marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    // padding: 80,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
  },
  cardContainerStyleTwo: {
    flex: 1,
    flexGrow: 1,
    // paddingRight: 60,
    // width: "100%",
  },
  categoryHeading: {
    color: "black",
    fontWeight: "700",
    marginTop: 20,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 14,
  },
  buttonBottom: {
    resizeMode: "contain",
    width: 30,
    height: 30,
    paddingRight: 10,
  },
  buttonContainer: {
    backgroundColor: "#cd1e4b",
    width: 46,
    height: 42,
    paddingTop: 4,
    paddingLeft: 8,
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
