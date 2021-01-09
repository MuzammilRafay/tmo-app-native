import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  ActivityIndicator,
} from "react-native";
import { WebView } from "react-native-webview";
import { ScrollView } from "react-native-gesture-handler";
import EStyleSheet from "react-native-extended-stylesheet";


function HomeDetail(props) {
  const [visible, setVisible] = useState(false);
  const [webViewHeight, setWebViewHeight] = useState("");
  //   this.props.navigation;
  const { itemId, link, otherParam } = props.route.params;

  console.log(itemId, otherParam, "itemId, link");

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
  const ActivityIndicatorLoadingView = () => {
    //making a view to show to while loading the webpage
    return (
      <ActivityIndicator
        color="#009688"
        size="large"
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      />
    );
  };

  const showSpinner = () => {
    // this.setState({ visible: true });
    setVisible(true);
  };

  const hideSpinner = () => {
    // this.setState({ visible: false });
    setVisible(false);
  };
  const onWebViewMessage = (event) => {
    // this.setState({webViewHeight: Number(event.nativeEvent.data)})

    setWebViewHeight(Number(event.nativeEvent.data));
  };
  return (
    <>
      <ScrollView style={{ flexGrow: 1 }}>
        {/* <iframe
          id="inlineFrameExample"
          title="Inline Frame Example"
          width="500"
          height="400"
          src={link}
        ></iframe> */}

        {/* <WebView
          originWhitelist={["*"]}
          source={{ html: `<iFrame src='${link}' />` }}
        />

        <WebView
          source={{
            html: `<iframe width="100%" height="100%" src="${link}"></iframe>`,
          }}
          style={{ marginTop: 20 }}
        /> */}

        {/* <WebView
          source={{ uri: otherParam }}
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
        /> */}
        {visible ? (
          <ActivityIndicator
            size="large"
            style={styles.ActivityIndicatorStyle}
            color="#bf2246"
            size="large"
          />
        ) : null}
        <WebView
          key={0}
          source={{ uri: otherParam }}
          // startInLoadingState={true}
          onLoadStart={() => showSpinner()}
          onLoad={() => hideSpinner()}
          // renderLoading={ActivityIndicatorLoadingView}
          style={styles.WebViewStyle}
          // automaticallyAdjustContentInsets={false}
          javaScriptEnabled={true}
          // domStorageEnabled={true}
          decelerationRate="normal"
          scalesPageToFit={true}
          scrollEnabled={true}
          // useWebKit={true}
          onMessage={onWebViewMessage}
          injectedJavaScript="window.ReactNativeWebView.postMessage(document.body.scrollHeight)"
        />
      </ScrollView>
    </>
  );
}



const styles = EStyleSheet.create({
  WebViewStyle: {
    width: "100%",
    height: Dimensions.get("window").height,
    // height: webViewHeight,
    flex: 1,
  },
  ActivityIndicatorStyle:{
    flex: 1,
    justifyContent: "center",
    height: '150rem',
  }
});

export default HomeDetail;

