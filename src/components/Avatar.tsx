import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {DefaultAvatar} from '../images';

const styles = StyleSheet.create({
  container: {height: 40, width: 40, borderRadius: 20},
  image: {width: '100%', height: '100%'},
});

type Props = {
  onPress: () => void;
};

export const Avatar = ({onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={DefaultAvatar} style={styles.image} />
    </TouchableOpacity>
  );
};
