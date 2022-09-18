import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../pages/SignIn';

import { Home } from '../pages/Home';

import { Profile } from '../pages/user/Profile';
import { Address } from '../pages/user/Address';
import { Cars } from '../pages/user/Cars';

import { SelectLocation } from '../pages/service/SelectLocation';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />

        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Cars" component={Cars} />

        <Stack.Screen name="SelectLocation" component={SelectLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
