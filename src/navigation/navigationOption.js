import React from 'react';
import HeaderBackground from '../components/header/HeaderBackground';
import {Platform, StatusBar} from 'react-native';

const navigationOptionCommon = {
  headerBarStyle: {
    height: 60,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0,
  },
  headerTitleStyle: {
    color: '#fff',
  },
  headerTitleAlign: 'center',
  headerBackground: () => <HeaderBackground />,
};

const navigationTopBar = {
  paddingTop: 10,
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
};

export {navigationOptionCommon, navigationTopBar};
