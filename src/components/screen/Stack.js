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

import { observer, inject } from 'mobx-react/native';

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
  static navigationOptions = {
    // header: null,
    headerMode: 'screen',
    headerTitle: <Text style={styles.titleTxt}>React Navigation V2</Text>,
  };
  // static navigationOptions = {
  //   headerMode: 'screen',
  //   // navigationOptions: ({ navigation }) => ({
  //   //   headerBackTitle: '공사 생성',
  //   //   headerTitleStyle: {color: '#fff'},
  //   //   headerStyle: {backgroundColor: '#353E58'}
  //   // }),
  //   headerTitle: <Text style={styles.titleTxt}>React Navigation V2</Text>,
  // };

  componentWillMount() {
    console.log('[Stack]mobx store', this.props);
  }
  getMessage = (msg) => {
    console.log('[getMessage] msg', msg.nativeEvent.data);
  }

  getWebView = (OS) => {
    const { width, height } = Dimensions.get('window');
    const urlTarget = this.props.navigation.state.params.name;
    console.log('getWebView urlTarget', urlTarget);
    const sampleurl = {
      'bus': 'https://storage.googleapis.com/bufs-multilan/index.html',
      'proj': 'https://s3.ap-northeast-2.amazonaws.com/projhub/4.todopage/index.html?uk=V43969U1O7w3O0e0g0M4R5P8',
      'post_sample': 'https://s3.ap-northeast-2.amazonaws.com/projhub/00.testpage/index.html#index',
      'sample': 'https://andreipfeiffer.github.io/react-native-webview-android-file-upload/index.html'
    };
    if (OS === 'ios') {
      return (<WebView
        source={{ uri: sampleurl[urlTarget] }}
        onMessage={(e) => this.getMessage(e)}
        style={{
          flex: 1,
          width: width,
        }}
      />);
    } else {
      /* OS === Android */
      return (<CustomWebView
        source={{ uri: sampleurl[urlTarget] }}
        startInLoadingState={true}
        onMessage={(e) => this.getMessage(e)}
        style={{
          flex: 1,
          width: width,
        }}
      />);
    }
  }
  render() {
    const { width, height } = Dimensions.get('window');
    // return (
    //   <View style={styles.container}>
    //     <View style={{
    //       flex: 1,
    //       backgroundColor: '#251061',
    //       width: width,
    //       padding: 20,
    //       marginBottom: -1,
    //       zIndex: 999
    //     }}>
    //       <Text style={{
    //         color: '#ffffff',
    //         fontSize: 15,
    //         textAlign: 'center',
    //       }}>ProjectHUB-WebView</Text>
    //     </View>
    //     <View style={{
    //       height: height - 80
    //     }}>
    //       { this.getWebView(Platform.OS) }
    //     </View>
    //   </View>
    // ); /* end return */
    return (
      <View style={styles.container}>
        { this.getWebView(Platform.OS) }
      </View>
    ); /* end return */
  }
}

export default Screen;
