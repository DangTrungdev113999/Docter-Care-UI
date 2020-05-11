import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Search from '../../screens/Search';

const Stack = createStackNavigator();

const SearchScreen = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Search" component={Search} />
  </Stack.Navigator>
);

export default SearchScreen;
