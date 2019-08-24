import React from 'react';
import {View} from 'react-native';

type Props = {
  margin: number;
};

export const MarginBottom = ({margin}: Props) => (
  <View style={{marginBottom: margin}} />
);
