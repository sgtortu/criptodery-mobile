import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREEN} from '_constants';
import ProfileScreen from '../../screens/ProfileScreen';
import HomeScreen from '../../screens/HomeScreen';
import SuggestedBlocksScreen from '../../screens/SuggestedBlocksScreen';
import MyBlocksScreen from '../../screens/MyBlocksScreen';

const {MY_BLOCKS_SCREEN, PROFILE_SCREEN, SUGGESTED_BLOCKS_SCREEN, HOME_SCREEN} =
  SCREEN;

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
        listeners={({navigation}) => ({})}
        options={{}}
        name={HOME_SCREEN}
        component={HomeScreen}
      />
      <Tab.Screen
        listeners={({navigation}) => ({})}
        options={{}}
        name={SUGGESTED_BLOCKS_SCREEN}
        component={SuggestedBlocksScreen}
      />
      <Tab.Screen
        listeners={({navigation}) => ({})}
        options={{}}
        name={MY_BLOCKS_SCREEN}
        component={MyBlocksScreen}
      />
      <Tab.Screen
        listeners={({navigation}) => ({})}
        options={{}}
        name={PROFILE_SCREEN}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
