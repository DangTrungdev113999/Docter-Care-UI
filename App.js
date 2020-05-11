import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation/index';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Navigation />
    </>
  );
};

export default App;
