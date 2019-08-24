import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: '#ddd',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  record: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    borderRadius: 25,
  },
});

type Props = {
  onPress: () => void;
};

export const Button = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.record} />
      </View>
    </TouchableOpacity>
  );
};
