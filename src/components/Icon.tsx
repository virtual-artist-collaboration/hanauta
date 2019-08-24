// @ts-ignore
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {padding: 4},
});

type Props = {
  name: string;
  onPress: () => void;
};

export const Icon = ({name, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <FontAwesome name={name} onPress={onPress} size={24} />
    </TouchableOpacity>
  );
};
