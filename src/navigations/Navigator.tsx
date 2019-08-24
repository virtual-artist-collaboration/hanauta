import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import {RecordScreen, ListScreen, WelcomeScreen} from '../screens';
import {primaryColor, white} from '../consts/colors';

const MainStack = createStackNavigator(
  {
    Record: {screen: RecordScreen},
    List: {screen: ListScreen},
  },
  {
    initialRouteName: 'Record',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: primaryColor,
      },
      headerTintColor: white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const Auth = createSwitchNavigator({
  Auth: AuthStack,
  Main: MainStack,
});

export const Navigator = createAppContainer(Auth);
