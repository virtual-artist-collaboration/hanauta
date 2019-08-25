import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import {RecordScreen, ListScreen, WelcomeScreen} from '../screens';
import {primaryColor, white} from '../consts/colors';
import {navigate} from './NavigationService';

import React from 'react';
import {Avatar, TabBarIcon, UploadForm} from '../components';

type TabProps = {
  focused: boolean;
};
const MainNavigationOptions = {
  headerStyle: {
    backgroundColor: primaryColor,
    marginRight: 8,
  },
  headerTintColor: white,
  headerRight: (
    <Avatar
      onPress={() => {
        navigate('Auth');
      }}
    />
  ),
};

const RecorderStack = createStackNavigator(
  {
    Record: {screen: RecordScreen, navigationOptions: {title: 'キロク'}},
    Upload: {screen: UploadForm, navigationOptions: {title: '投稿'}},
  },
  {defaultNavigationOptions: MainNavigationOptions},
);

RecorderStack.navigationOptions = {
  tabBarLabel: 'キロク',
  tabBarIcon: ({focused}: TabProps) => (
    <TabBarIcon focused={focused} name={'mic'} />
  ),
};

const SampleListStack = createStackNavigator(
  {List: {screen: ListScreen, navigationOptions: {title: 'オモイツキ'}}},
  {defaultNavigationOptions: MainNavigationOptions},
);

SampleListStack.navigationOptions = {
  tabBarLabel: 'オモイツキ',
  tabBarIcon: ({focused}: TabProps) => (
    <TabBarIcon focused={focused} name={'queue-music'} />
  ),
};

const SongListStack = createStackNavigator(
  {SongList: {screen: ListScreen, navigationOptions: {title: 'カタチ'}}},
  {defaultNavigationOptions: MainNavigationOptions},
);

SongListStack.navigationOptions = {
  tabBarLabel: 'カタチ',
  tabBarIcon: ({focused}: TabProps) => (
    <TabBarIcon focused={focused} name={'library-music'} />
  ),
};

const MainTab = createBottomTabNavigator(
  {
    Recorder: RecorderStack,
    SampleList: SampleListStack,
    SongList: SongListStack,
  },
  {
    tabBarOptions: {
      activeTintColor: primaryColor,
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
  Main: MainTab,
});

export const Navigator = createAppContainer(Auth);
