import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import {RecordScreen, ListScreen, WelcomeScreen} from '../screens';
import {primaryColor, white} from '../consts/colors';
import {navigate} from './NavigationService';
import {Avatar} from '../components/Avatar';
import React from 'react';

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
        marginRight: 8,
      },
      headerTintColor: white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },

      headerRight: (
        <Avatar
          onPress={() => {
            navigate('Auth');
          }}
        />
      ),
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
