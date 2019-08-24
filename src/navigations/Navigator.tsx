import {createStackNavigator, createAppContainer} from 'react-navigation';

import {RecordScreen, ListScreen} from '../screens';
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

export const Navigator = createAppContainer(MainStack);
