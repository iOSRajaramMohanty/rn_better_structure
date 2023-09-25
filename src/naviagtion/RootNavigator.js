import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { AppNavigator } from './AppNavigator';
import { AuthNavigator } from './AuthNavigator';
import { getUser } from '@/selectors/UserSelectors';
import { theme } from '@/theme';

export function RootNavigator() {
  const user = useSelector(getUser);
  const scheme = useColorScheme();

  return (
    <NavigationContainer >
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}