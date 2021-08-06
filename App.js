import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Initial from './src/screens/Initial'
import Actions from './src/screens/Login'
import Home from './src/screens/Home'
import Chapters from './src/screens/Chapters'
import Verses from './src/screens/Verses'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial">
        <Stack.Screen name="Initial" component={Initial} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Actions} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Chapters" component={Chapters} options={{headerShown:false}}/>
        <Stack.Screen name="Verses" component={Verses} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}