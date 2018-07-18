import { createStackNavigator } from 'react-navigation';

import Stack from '../screen/Stack';

export default createStackNavigator(
  {
    Stack,
  },
  {
    initialRouteName: 'Stack',
    headerMode: 'none',
  },
);
