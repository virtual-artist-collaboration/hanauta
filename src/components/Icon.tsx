// @ts-ignore
import FontAwesome from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

type Props = {
  name: string;
  onPress?: () => void;
  color?: string;
  size?: number;
};

export const Icon = ({name, onPress, color, size = 20}: Props) => {
  return (
    <FontAwesome name={name} onPress={onPress} size={size} color={color} />
  );
};
