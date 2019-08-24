import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {primaryColor, white} from '../consts/colors';
import {largeText} from '../consts/fonts';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: primaryColor,
    borderRadius: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  text: {color: white, fontSize: largeText, fontWeight: 'bold'},
});

type Props = {
  onPress: () => void;
};

export const LoginButton = ({onPress}: Props) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>ログイン</Text>
  </TouchableOpacity>
);
