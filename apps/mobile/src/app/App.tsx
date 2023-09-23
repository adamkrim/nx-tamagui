import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import { useColorScheme } from 'react-native';
import {
  Button,
  ListItem,
  MyComponent,
  Switch,
  TamaguiProvider,
  Theme,
} from '@nx-tamagui/ui';
import config from '../../tamagui.config';

export const App = () => {
  // TODO: Font react native way
  // const [loaded] = useFonts({
  //   Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
  //   InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  // })
  const scheme = useColorScheme();

  return (
    <TamaguiProvider
      config={config}
      defaultTheme={scheme === 'dark' ? 'dark' : 'light'}
    >
      <Theme name={'blue'}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Text>NX and tamagui are friends</Text>
          <MyComponent space="$2">
            <ListItem>
              <Button>Push me</Button>
            </ListItem>
            <ListItem>
              <Switch size="$4">
                <Switch.Thumb animation="bouncy" />
              </Switch>
            </ListItem>
            <ListItem>
              <Button variant="outlined">
                I'm an outlined button without outline??
              </Button>
            </ListItem>
          </MyComponent>
        </SafeAreaView>
      </Theme>
    </TamaguiProvider>
  );
};

export default App;
