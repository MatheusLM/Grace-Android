import React from 'react';
import { StatusBar, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container
} from './styles';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Initial({navigation}){

  const getData = async () => {
    try{
      // Descomentar para testes
      // await AsyncStorage.setItem('@TOKEN', '')
      const TOKEN = await AsyncStorage.getItem('@TOKEN')
      if( !TOKEN ){
        navigation.navigate("Login")
      }else{
        navigation.navigate("Home")
      }
    }catch(e){ console.log(e) }
  }
  getData();

  return(
    <Container>
      <StatusBar backgroundColor={ 'transparent' } translucent={ true }/>
      <ActivityIndicator animating={true} color={'white'} size={'large'}/>
    </Container>
  );
}

export default Initial;