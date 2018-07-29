import { createStackNavigator } from 'react-navigation';

import Stack from '../screen/Stack';

const stackNav = createStackNavigator(
  {
    WebViewNav: {
      screen: Stack,
      path: 'WebViewNav',
    }
  },
  {
    initialRouteName: 'WebViewNav',
  }
);
export default stackNav;
/* 
{
    initialRouteName: 'Stack',
    headerMode: 'screen',
    gesturesEnabled: true,
    navigationOptions: ({ navigation }) => ({
      title: '공사 생성',
      headerTitleStyle: {color: '#fff'},
      headerStyle: {backgroundColor: '#353E58'}
    }),
  }
*/
