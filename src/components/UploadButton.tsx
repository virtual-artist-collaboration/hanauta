import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from './Icon';
import {shade} from '../consts/colors';

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: shade,
  },
});

type Props = {
  onPress: () => void;
};

export const UploadButton = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={'file-upload'} />
    </TouchableOpacity>
  );
};
