/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment, useEffect} from 'react';
import {View, StatusBar, StyleSheet, YellowBox} from 'react-native';
import {Navigator} from './navigations/Navigator';
import {setTopLevelNavigator} from './navigations/NavigationService';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Provider} from 'react-redux';
import {store} from './store';
import Permissions from 'react-native-permissions';

Icon.loadFont();

YellowBox.ignoreWarnings(['Module AudioRecorderManager']);

const styles = StyleSheet.create({
  container: {flex: 1},
});

const App = () => {
  useEffect(() => {
    Permissions.request('microphone').then(response => {
      // Returns once the user has chosen to 'allow' or to 'not allow' access
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      if (response !== 'authorized') {
        console.log('microphone not authorized');
      }
    });
  }, []);
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
