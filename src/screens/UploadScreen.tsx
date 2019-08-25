import React from 'react';
import {StyleSheet, View} from 'react-native';
import {secondaryColor} from '../consts/colors';
import {UploadForm} from '../components';

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

export const UploadScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <UploadForm />
      </View>
    </View>
  );
};
