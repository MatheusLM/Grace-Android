import React from 'react';
import { StatusBar, Image } from 'react-native';
import ConfigImage from '../../assets/settings.png';
import ListedBooks from '../../components/BooksList'
import {
  Container, WelcomeText, Menu, MenuButtons, MenuButtonOld, MenuButtonNew, MenuText, ConfigButton, Books, Book, BookName
} from './styles';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Home ({navigation}){
  return (
    <Container>
      <StatusBar backgroundColor={ 'transparent' } translucent={ true }/>
      <WelcomeText>Bem Vindo,</WelcomeText>
      <WelcomeText>Matheus Lopes Marques</WelcomeText>
      <Menu>
        <MenuButtons>
          <MenuButtonOld>
            <MenuText>Antigo</MenuText>
          </MenuButtonOld>
          <MenuButtonNew>
            <MenuText>Novo</MenuText>
          </MenuButtonNew>
        </MenuButtons>
        <ConfigButton>
          <Image source={ ConfigImage }/>
        </ConfigButton>
      </Menu>
      <ListedBooks navigation={navigation}/>
    </Container>
  );
}

export default Home;