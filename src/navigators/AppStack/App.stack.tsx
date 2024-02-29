import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//* Screens
import ProfileScreen from '_screens/profile';
import HomeScreen from '_screens/home';
import SuggestedBlocksScreen from '_screens/suggestedBlocks';
import MyBlocksScreen from '_screens/myBlocks';

//* Utils
import { SCREEN } from '_utils/constants';

const {
  MY_BLOCKS_SCREEN,
  PROFILE_SCREEN,
  SUGGESTED_BLOCKS_SCREEN,
  HOME_SCREEN,
} = SCREEN;

export type RootStackParamList = {
  [MY_BLOCKS_SCREEN]: undefined;
  [HOME_SCREEN]: undefined;
  [SUGGESTED_BLOCKS_SCREEN]: undefined;
  [PROFILE_SCREEN]: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <Tab.Navigator screenOptions={{}} initialRouteName={HOME_SCREEN}>
      <Tab.Screen
        listeners={() => ({})}
        options={{}}
        name={HOME_SCREEN}
        component={HomeScreen}
      />
      <Tab.Screen
        listeners={() => ({})}
        options={{}}
        name={SUGGESTED_BLOCKS_SCREEN}
        component={SuggestedBlocksScreen}
      />
      <Tab.Screen
        listeners={() => ({})}
        options={{}}
        name={MY_BLOCKS_SCREEN}
        component={MyBlocksScreen}
      />
      <Tab.Screen
        listeners={() => ({})}
        options={{}}
        name={PROFILE_SCREEN}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
