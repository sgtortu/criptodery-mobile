import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LOGIN_SCREEN} from '../../constants/screens/Screens';

import LoginScreen from '../../screens/LoginScreen';

export type RootStackParamList = {
  [LOGIN_SCREEN]: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={LOGIN_SCREEN}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
