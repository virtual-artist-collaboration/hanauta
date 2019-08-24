import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from './Icon';
import {transparent, weakTextColor} from '../consts/colors';

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: transparent,
  },
});

type Props = {
  onPress: () => void;
};

export const DownloadButton = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={'file-download'} color={weakTextColor} />
    </TouchableOpacity>
  );
};
