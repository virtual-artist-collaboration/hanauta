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
import {Navigator} from './Navigator';

const styles = StyleSheet.create({
  container: {flex: 1},
});

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Navigator />
      </View>
    </Fragment>
  );
};

export default App;
