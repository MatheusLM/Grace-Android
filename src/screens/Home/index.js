import React, { useState, useEffect } from 'react';
import { StatusBar, Image } from 'react-native';
import ConfigImage from '../../assets/settings.png';
import BooksList from '../../assets/books.json'
import {
  Container, WelcomeText, Menu, MenuButtons, MenuButtonOld, MenuButtonNew, MenuText, ConfigButton, Books, Book, BookName
} from './styles';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Home ({navigation}){

  function toggle(Test){ SetTestament(Test) }

  const [Testament, SetTestament] = useState("VT")
  const Item = ( { name, testament, abbrev } ) => (testament == Testament)? (
    <Book onPress={ () => navigation.navigate('Chapters',{ name: name, abbrev: abbrev }) }>
      <BookName> { name } </BookName>
    </Book>
  ):null
  const renderItem = ( { item } ) => <Item name={ item.name } abbrev={ item.abbrev.pt } testament={ item.testament }/>

  return (
    <Container>
      <StatusBar backgroundColor={ 'transparent' } translucent={ true }/>
      <WelcomeText>Bem Vindo,</WelcomeText>
      <WelcomeText>Matheus Lopes Marques</WelcomeText>
      <Menu>
        <MenuButtons>
          <MenuButtonOld onPress={ () => toggle("VT") } backgroundColor="red">
            <MenuText>Antigo</MenuText>
          </MenuButtonOld>
          <MenuButtonNew onPress={ () => toggle("NT") }>
            <MenuText>Novo</MenuText>
          </MenuButtonNew>
        </MenuButtons>
        <ConfigButton>
          <Image source={ ConfigImage }/>
        </ConfigButton>
      </Menu>
      <Books
        data={BooksList}
        keyExtractor={ item => item.name }
        renderItem={ renderItem }/>
    </Container>
  );
}

export default Home;