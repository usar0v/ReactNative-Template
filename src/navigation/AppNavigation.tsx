import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {APP_SCREENS, AUTH_SCREENS} from '@routes/routes';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  const isAuth = true;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!isAuth
        ? AUTH_SCREENS.map(screen => (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
            />
          ))
        : APP_SCREENS.map(screen => (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
            />
          ))}
    </Stack.Navigator>
  );
};
