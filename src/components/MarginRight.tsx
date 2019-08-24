import React from 'react';
import {View} from 'react-native';

type Props = {
  margin: number;
};

export const MarginRight = ({margin}: Props) => (
  <View style={{marginRight: margin}} />
);
