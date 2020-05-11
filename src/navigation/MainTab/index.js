import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Button, Block} from '../../lib/';
import Icon from '../../components/Icon';

import HomeTab from './HomeTab';
import SearchTab from './SearchTab';
import HeartTab from './HeartTab';
const Tab = createBottomTabNavigator();

const CusomTabBottom = ({state, descriptors, navigation}) => {
  return (
    <Block
      h={50}
      direction="row"
      justifyContent="space-around"
      middle
      bgColor="#fff"
      shadow>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const getIcon = () => {
          if (route.name === 'Home') {
            return {
              type: 'simpleLineIcons',
              name: 'home',
            };
          }

          if (route.name === 'Search') {
            return {
              type: 'fontisto',
              name: 'search',
            };
          }

          if (route.name === 'Heart') {
            return {
              type: 'antDesign',
              name: 'hearto',
            };
          }

          if (route.name === 'Calendar') {
            return {
              type: 'fontAwesome',
              name: 'calendar-plus-o',
            };
          }

          if (route.name === 'User') {
            return {
              type: 'evilIcons',
              name: 'user',
            };
          }

          return {
            type: 'simpleLineIcons',
            name: 'home',
          };
        };

        return (
          <Button
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            block
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            centered
            middle>
            <Icon
              type={getIcon().type}
              name={getIcon().name}
              size={route.name === 'User' ? 35 : 25}
              color={isFocused ? '#E8008D' : 'black'}
            />
          </Button>
        );
      })}
    </Block>
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Heart"
      tabBar={(props) => <CusomTabBottom {...props} />}>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Search" component={SearchTab} />
      <Tab.Screen name="Heart" component={HeartTab} />
      <Tab.Screen name="Calendar" component={SearchTab} />
      <Tab.Screen name="User" component={HeartTab} />
    </Tab.Navigator>
  );
};

export default MainTab;
