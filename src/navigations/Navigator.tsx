import {createStackNavigator, createAppContainer} from 'react-navigation';

import {RecordScreen, ListScreen} from '../screens';

const MainStack = createStackNavigator(
  {
    Record: {screen: RecordScreen},
    List: {screen: ListScreen},
  },
  {
    initialRouteName: 'Record',
  },
);

export const Navigator = createAppContainer(MainStack);
