// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  WebView,
  Dimensions,
  Platform,
} from 'react-native';

import CustomWebView from 'react-native-webview-android-file-upload';
import { ratio, colors } from '../../utils/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

type Props = {

};
type State = {

}

class Screen extends Component<Props, State> {
  getWebView = (OS) => {
    const { width, height } = Dimensions.get('window');
    const sampleurl = {
      'bus': 'https://storage.googleapis.com/bufs-multilan/index.html',
      'proj': 'https://s3.ap-northeast-2.amazonaws.com/projhub/4.todopage/index.html?uk=V43969U1O7w3O0e0g0M4R5P8',
      'sample': 'https://andreipfeiffer.github.io/react-native-webview-android-file-upload/index.html'
    };
    if (OS === 'ios') {
      return (<WebView
        source={{ uri: sampleurl.proj }}
        style={{
          flex: 1,
          width: width,
        }}
      />);
    } else {
      /* OS === Android */
      return (<CustomWebView
        source={{ uri: sampleurl.proj }}
        startInLoadingState={true}
        style={{
          flex: 1,
          width: width,
        }}
      />);
    }
  }
  render() {
    const { width, height } = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <View style={{
          flex: 1,
          backgroundColor: '#251061',
          width: width,
          padding: 20,
          marginBottom: -1,
          zIndex: 999
        }}>
          <Text style={{
            color: '#ffffff',
            fontSize: 15,
            textAlign: 'center',
          }}>ProjectHUB-WebView</Text>
        </View>
        <View style={{
          height: height - 80
        }}>
          { this.getWebView(Platform.OS) }
        </View>
      </View>
    );
  }
}

export default Screen;
