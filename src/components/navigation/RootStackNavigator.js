import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { observer, inject } from 'mobx-react/native';
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

import appStore from '../../stores/appStore';
import NavigationService from './NavigationService';
import IntroScreen from '../screen/Intro';
import NotFoundScreen from '../screen/NotFound';
import StackNavigator from '../navigation/StackNavigator';
// import StackNavigator from '../screen/Stack';

class RootNavigator extends Component {
  state = {
    initScreen: 'Intro',
  };

  componentWillMount() {
    console.log('[RootStackNavigator]mobx store', this.props);
  }

  render() {
    const routeConfig = {
      Intro: {
        screen: IntroScreen,
        path: 'Intro',
      },
      StackNavigator: {
        screen: StackNavigator,
        path: 'Stack',
      },
      NotFound: {
        screen: NotFoundScreen,
        path: 'NotFound',
      },
    };

    const navigatorConfig = {
      initialRouteName: this.state.initScreen,
    };

    const RootStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

    return (
      <RootStackNavigator
        ref={(v) => {
          if (v) {
            NavigationService.setTopLevelNavigator(v);
          }
        }}
      />
    );
  }
}

export default RootNavigator;
