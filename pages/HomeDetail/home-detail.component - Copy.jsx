import React from "react";
import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import { WebView } from "react-native-webview";

class HomeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //   this.props.navigation;
    const { itemId, otherParam } = this.props.route.params;
    //   this.props.navigation.goBack();
    //   navigation.navigate("Home");
    //    this.props.navigation.push("Details", {
    //      itemId: Math.floor(Math.random() * 100),
    //    });
    //    {
    //  JSON.stringify(itemId);
    //    }
    const { deviceHeight } = Dimensions.get("window").height;
    const { deviceWidth } = Dimensions.get("window").width;
    return (
      <View style={{ flex: 1 }}>
        {/* <WebView
          style={{
            flex: 1,
            backgroundColor: "yellow",
            width: deviceWidth,
            height: deviceHeight,
          }}
          source={{ uri: "https://www.slack.com" }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}
          scalesPageToFit={true}
        /> */}
        <WebView
          url={"https://m.facebook.com"}
          style={{
            flex: 1,
            backgroundColor: "yellow",
            width: deviceWidth,
            height: deviceHeight,
          }}
        />
      </View>
    );
  }
}

export default HomeDetail;
