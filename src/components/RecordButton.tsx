/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  record: {
    height: 40,
    width: 40,
    backgroundColor: 'red',
    borderRadius: 25,
  },

  recording: {
    height: 30,
    width: 30,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

type Props = {
  onPress: () => void;
  isRecording: boolean;
};

export const RecordButton = ({onPress, isRecording}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: isRecording ? 'red' : '#ddd'},
      ]}>
      <View style={styles.container}>
        <View style={isRecording ? styles.recording : styles.record} />
      </View>
    </TouchableOpacity>
  );
};
