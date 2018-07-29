// @flow
import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
  View,
  FlatList,
  InteractionManager,
  WebView,
} from 'react-native';
/* mobx */
import { observable } from 'mobx';
// import { observer } from 'mobx-react';
// import { inject } from 'mobx-react/native';
import { inject, observer } from 'mobx-react/native';

import { ratio, colors } from '../../utils/Styles';
import { IC_MASK } from '../../utils/Icons';
import User from '../../models/User';
import { getString } from '../../../STRINGS';
import Button from '../shared/Button';
import NavigationService from '../navigation/NavigationService';

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleTxt: {
    marginTop: 100,
    color: 'white',
    fontSize: 28,
  },
  txtLogin: {
    fontSize: 14,
    color: 'white',
  },
  imgBtn: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 16,
  },
  viewUser: {
    marginTop: 80,
    alignItems: 'center',
  },
  txtUser: {
    fontSize: 16,
    color: '#eee',
    lineHeight: 48,
  },
  btnBottomWrapper: {
    position: 'absolute',
    bottom: 40,
  },
  btnLogin: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    borderRadius: 4,
    borderWidth: 2,
    width: 320,
    height: 52,
    borderColor: 'white',

    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = {
  store: User;
  // store?: any;
  // kek?: any;
};
type State = {
  isLoggingIn: boolean;
}

@inject('store') @observer
class Page extends Component<Props, State> {
  static navigationOptions = {
    header: null,
  };

  timer: any;

  state = {
    isLoggingIn: false,
  };

  componentWillMount() {
    console.log('[Intro]mobx store', this.props);
  }
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleTxt}>projectHUBCL</Text>
        <View style={styles.viewUser}>
          <Text style={styles.txtUser}>{this.props.store.user.displayName}</Text>
          <Text style={styles.txtUser}>{this.props.store.user.age}</Text>
          <Text style={styles.txtUser}>{this.props.store.user.job}</Text>
        </View>
        <View style={styles.btnBottomWrapper}>
          <Button
            onPress={() => NavigationService.navigate('Stack', {name: 'proj'})}
            style={[
              styles.btn,
              {
                marginTop: 50,
              },
            ]}
          >Go to ProjectHUBCL</Button>
          <Button
            onPress={() => NavigationService.navigate('Stack', {name: 'sample'})}
            style={[
              styles.btn,
              {
                marginTop: 50,
              },
            ]}
          >Go to react-native-webview-android-file-upload</Button>
          <Button
            onPress={() => NavigationService.navigate('WebViewNav', {name: 'post_sample'})}
            style={[
              styles.btn,
              {
                marginTop: 50,
              },
            ]}
          >postMessage example</Button>
        </View>
      </View>
    );
  }

  onLogin = () => {
    this.props.store.user = new User();
    this.setState({ isLoggingIn: true }, () => {
      this.timer = setTimeout(() => {
        this.props.store.user.displayName = 'dooboolab';
        this.props.store.user.age = 30;
        this.props.store.user.job = 'developer';
        this.setState({ isLoggingIn: false });
      }, 1000);
    });
  }
}

export default Page;
