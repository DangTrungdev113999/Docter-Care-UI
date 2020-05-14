import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation/index';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';

const App = () => {
  return (
    <ActionSheetProvider>
      <>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Navigation />
      </>
    </ActionSheetProvider>
  );
};

export default App;
