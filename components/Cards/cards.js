import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const Cards = (props) => {
  return (
    <View style={styles.cardContainer}>
      {/* <View> */}
      <View style={styles.cardBodyColor}>
        {/* <Text>Image</Text> */}
        {props.title && <Text style={styles.titleText}>{props.title}</Text>}
      </View>
      {/* <View>
      </View> */}
      {/* </View> */}
    </View>
  );
};

const styles = EStyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: "15rem",
    // width: 140,
    marginLeft: "3rem",
    justifyContent: "space-between",
  },
  cardContainerTwo: {},
  cardBodyColor: {
    height: "130rem",
    width: "170rem",
    // height: "20%",
    // width: "40%",
    // paddingHorizontal: "33%",
    // paddingVertical: "35%",

    // height: Dimensions.get("window").height - 550,
    // width: Dimensions.get("window").width - 195,

    backgroundColor: "#c4c4c4",
    borderRadius: "20rem",
    marginRight: "20rem",
  },
  titleText: {
    color: "black",
    fontSize: "16rem",
    textAlign: "center",
    fontWeight: "700",
    width: "200rem",
    textAlign: "center",
    paddingLeft: "30rem",
    width: "155rem",
  },
});

export default Cards;
