/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text testID="heading">Hello tamagui</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
