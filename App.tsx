import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'jotai';

import {AppNavigation} from '@navigation/index';

export const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <AppNavigation />
      </Provider>
    </NavigationContainer>
  );
};
