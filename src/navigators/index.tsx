import React from 'react';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

//* Stacks
import AuthStack from './AuthStack';
import AppStack from './AppStack';

//* Utils
import { SCREEN } from '_utils/constants';
import { RootState } from '_redux/reducers';

const Stack = createNativeStackNavigator();

const { AUTH_STACK, APP_STACK } = SCREEN;

const Navigation = () => {
  const {
    UserReducers: { token },
  } = useSelector((store: RootState) => store);

  const isGuest = true;
  console.log('isGuest----->', isGuest);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {token || isGuest ? (
          <Stack.Screen name={APP_STACK} component={AppStack} />
        ) : (
          <Stack.Screen name={AUTH_STACK} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
