import {HomeScreen} from '@screens/Home';

import {ERoutes, TScreen} from './types';

export const AUTH_SCREENS: TScreen[] = [];

export const APP_SCREENS: TScreen[] = [
  {
    name: ERoutes.Home,
    component: HomeScreen,
  },
];
