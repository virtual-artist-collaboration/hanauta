import {createStackNavigator, createAppContainer} from 'react-navigation';

import {RecordScreen} from './RecordScreen';
const MainStack = createStackNavigator(
  {
    Record: {screen: RecordScreen},
  },
  {
    initialRouteName: 'Record',
  },
);

export const Navigator = createAppContainer(MainStack);
