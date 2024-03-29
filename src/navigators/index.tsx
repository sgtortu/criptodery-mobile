import React from 'react';
import {AUTH_STACK, APP_STACK} from '@app/constants/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootState} from '@app/redux';
import {useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {token} = useSelector((store: RootState) => store.user);
  let isGuest = true;
  console.log('isGuest----->', isGuest)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
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
