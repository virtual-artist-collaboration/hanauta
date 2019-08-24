import React from 'react';
import {StyleSheet, View} from 'react-native';
import {secondaryColor} from '../consts/colors';
import {Recorder} from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    backgroundColor: secondaryColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const RecordScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Recorder />
      </View>
    </View>
  );
};
