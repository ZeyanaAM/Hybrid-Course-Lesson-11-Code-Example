import React from 'react';
import AuthContextProvider from './context/AuthContext';
import AuthNavigation from './navigation/AuthNavigation';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LogIn from './screens/LogIn';
// import Home from './screens/Home';

// const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthContextProvider>
      <AuthNavigation />
    </AuthContextProvider>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="LogIn">
    //     <Stack.Screen name="LogIn" component={LogIn} />
    //     <Stack.Screen name="Home" component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
