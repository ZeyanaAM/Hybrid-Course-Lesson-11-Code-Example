import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticatedStack from './AuthenticatedStack';
import UnauthenticatedStack from './UnauthenticatedStack';
import { AuthContext } from '../context/AuthContext';
import Splash from '../screens/Splash';

export default function AuthNavigation() {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Splash />;
  }
  return (
    <NavigationContainer>
      {user ? <AuthenticatedStack /> : <UnauthenticatedStack />}
    </NavigationContainer>
  );
}
