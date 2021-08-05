import React from 'react';
import { StatusBar } from 'react-native';
import ArrowImage from '../../assets/arrow-left.png';
import {
  Container, Header, Arrow, SelectText, Name
} from './styles';

import ChaptersList from '../../components/ChaptersList'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Chapters({ route, navigation }){
  const { name, abbrev } = route.params;
  return (
    <Container>
      <StatusBar backgroundColor={ 'transparent' } translucent={ true }/>
      <Header onPress={ () => navigation.goBack() }>
        <Arrow source={ArrowImage}/>
        <SelectText>Voltar para livros</SelectText>
      </Header>
      <Name>{name}</Name>
      <ChaptersList route={route} navigation={navigation} name={name} abbrev={abbrev}/>
    </Container>
  );
}

export default Chapters;