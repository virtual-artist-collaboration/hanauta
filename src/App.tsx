/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {Navigator} from './navigations/Navigator';
import {setTopLevelNavigator} from './navigations/NavigationService';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';
import {Provider} from 'react-redux';
import {store} from './store';

Icon.loadFont();

const styles = StyleSheet.create({
  container: {flex: 1},
});

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <Navigator ref={navigatorRef => setTopLevelNavigator(navigatorRef)} />
        </View>
      </Fragment>
    </Provider>
  );
};

export default App;
