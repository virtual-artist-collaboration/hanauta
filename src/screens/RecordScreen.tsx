import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from '../components/Button';
import {navigate} from '../navigations/NavigationService';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    flex: 1,
  },
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const RecordScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Button onPress={() => {}} />
      </View>
    </View>
  );
};

RecordScreen.navigationOptions = () => {
  return {
    title: 'マイページ',
    headerRight: <Text onPress={() => navigate('List')}>ToList</Text>,
  };
};
