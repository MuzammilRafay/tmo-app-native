import React from "react";
import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import { WebView } from "react-native-webview";

function HomeDetail(props) {
  //   this.props.navigation;
  const { itemId, otherParam } = props.route.params;
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
    // <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    //   <OptionButton
    //     icon="md-school"
    //     label="Read the Expo documentation a"
    //     onPress={() => Linking.openURL('https://google.com')}
    //   />

    //   <OptionButton
    //     icon="md-compass"
    //     label="Read the React Navigation documentation"
    //     onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
    //   />

    //   <OptionButton
    //     icon="ios-chatboxes"
    //     label="Ask a question on the forums"
    //     onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
    //     isLastOption
    //   />
    // </ScrollView>
    //   <iframe id="inlineFrameExample"
    //     title="Inline Frame Example"
    //     width="500"
    //     height="400"
    //     src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
    // </iframe>
    // <WebView
    //   originWhitelist={['*']}
    //   source={{ html: "<iFrame src='https://www.google.com/' />" }}
    // />

    // <WebView
    //   source={{html: '<iframe width="100%" height="100%" src="http://wingitt.pk/ordernow"></iframe>'}}
    //   style={{marginTop: 20}}
    // />
    <WebView
      source={{ uri: "https://google.com" }}
      style={{ width: "100%", height: 300 }}
    />
  );
}

export default HomeDetail;
