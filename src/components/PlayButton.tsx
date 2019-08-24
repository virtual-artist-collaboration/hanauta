import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from './Icon';
import {primaryColorLight, white} from '../consts/colors';

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primaryColorLight,
  },
});

type Props = {
  onPress: () => void;
  isPlaying: boolean;
};

export const PlayButton = ({onPress, isPlaying}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={isPlaying ? 'pause' : 'play'} color={white} />
    </TouchableOpacity>
  );
};
