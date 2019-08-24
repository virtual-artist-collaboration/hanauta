import React from 'react';
import {Icon} from './Icon';
import {primaryColor, shade} from '../consts/colors';

interface Props {
  name: string;
  focused: boolean;
}

export const TabBarIcon = ({name, focused}: Props) => (
  <Icon name={name} color={focused ? primaryColor : shade} />
);
