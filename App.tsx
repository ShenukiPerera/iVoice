// File: App.tsxjsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './assets/screens/LandingPage';
import Home1Page from './assets/screens/Home1Page';
import HomeTabs from './assets/screens/HomeTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Translate"
          component={HomeTabs}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
