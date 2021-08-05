import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home'
import Chapters from './src/screens/Chapters'
import Verses from './src/screens/Verses'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Chapters" component={Chapters} options={{headerShown:false}}/>
        <Stack.Screen name="Verses" component={Verses} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}