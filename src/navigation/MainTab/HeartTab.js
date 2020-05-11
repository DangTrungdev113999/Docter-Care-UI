import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import PracticeScreen from '../../screens/Practice';
import CedentialsScreen from '../../screens/Cedentials';
import ScheduleScreen from '../../screens/Schedule';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const HeartScreen = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#5D0E7F',
      inactiveTintColor: '#222',
      indicatorStyle: {
        backgroundColor: '#5D0E7F',
      },
      labelStyle: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
      },
      tabBarPosition: 'bottom',
    }}>
    <Tab.Screen name="Practice" component={PracticeScreen} />
    <Tab.Screen name="Cedentials" component={CedentialsScreen} />
    <Tab.Screen name="Schedule" component={ScheduleScreen} />
  </Tab.Navigator>
);
const HeartTab = () => (
  <Stack.Navigator>
    <Stack.Screen name="Heart" component={HeartScreen} />
  </Stack.Navigator>
);

export default HeartTab;
