// If you haven't already, install @react-navigation/stack:
// npx expo install @react-navigation/stack
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../app/(auth)/login';
import SignupScreen from '../app/(auth)/signup';
import GoogleAuthScreen from '../app/(auth)/social-auth/google-auth';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="GoogleAuth" component={GoogleAuthScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;