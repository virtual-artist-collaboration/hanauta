// @ts-ignore
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';

type Props = {
  name: string;
  onPress?: () => void;
  color?: string;
};

export const Icon = ({name, onPress, color}: Props) => {
  return <FontAwesome name={name} onPress={onPress} size={24} color={color} />;
};
