import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//* Screens
import LoginScreen from '_screens/login';

//* Utils
import { SCREEN } from '_utils/constants';

const { LOGIN_SCREEN } = SCREEN;

export type RootStackParamList = {
  [LOGIN_SCREEN]: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={LOGIN_SCREEN}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
