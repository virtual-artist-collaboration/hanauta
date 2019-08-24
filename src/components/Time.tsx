import React from 'react';
import {View, Text} from 'react-native';

type Props = {
  ellapsedTime: number;
};

const getTime = (ellapsedTime: number): string => {
  const hour = Math.floor(ellapsedTime / 3600)
    .toFixed()
    .padStart(2, '0');
  const minute = Math.floor((ellapsedTime % 3600) / 60)
    .toFixed()
    .padStart(2, '0');
  const second = ((ellapsedTime % 3600) % 60).toFixed().padStart(2, '0');
  if (hour) {
    return `${hour}:${minute}:${second}`;
  }
  return `${minute}:${second}`;
};
export const Time = ({ellapsedTime}: Props) => {
  return (
    <View>
      <Text>{getTime(ellapsedTime)}</Text>
    </View>
  );
};
