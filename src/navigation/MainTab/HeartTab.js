import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import PracticeScreen from '../../screens/Practice';
import CedentialsScreen from '../../screens/Cedentials';
import ScheduleScreen from '../../screens/Schedule';

import BackIcon from '../../components/header/BackIcon';

import {Block} from '../../lib/';
import {navigationOptionCommon, navigationTopBar} from '../navigationOption';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const HeartScreen = () => (
  <Tab.Navigator tabBarOptions={{...navigationTopBar}}>
    <Tab.Screen name="Practice" component={PracticeScreen} />
    <Tab.Screen name="Cedentials" component={CedentialsScreen} />
    <Tab.Screen name="Schedule" component={ScheduleScreen} />
  </Tab.Navigator>
);

const HeartTab = () => (
  <Stack.Navigator screenOptions={{...navigationOptionCommon}}>
    <Stack.Screen
      name="Heart"
      options={({route, navigation}) => ({
        headerRight: () => <Block />,
        headerLeft: () => <BackIcon navigation={navigation} />,
      })}
      component={HeartScreen}
    />
  </Stack.Navigator>
);

export default HeartTab;
