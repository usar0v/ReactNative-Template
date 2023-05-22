import React from 'react';
import {SvgProps} from 'react-native-svg';

import {colors} from '@utils/theme/colors';

import Search from './search.svg';

export const icons = {
  search: Search,
};

export type IconType = keyof typeof icons;

export type IconProps = SvgProps & {
  type: IconType;
  fill?: string;
};

export const Icon = ({type, fill = colors['black-2'], ...rest}: IconProps) => {
  const SelectedIcon = icons[type];

  return <SelectedIcon fill={fill} {...rest} />;
};
