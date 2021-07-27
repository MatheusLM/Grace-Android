import React from 'react';
import { Text, View, SafeAreaView, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native';
import ConfigImage from '../../assets/settings.png';
import {
  Container, WelcomeText, Menu, MenuButtons, MenuButtonOld, MenuButtonNew, MenuText, ConfigButton, Books, Book, BookName
} from './styles';

const BOOKS = [
  {
    "abbrev": {"pt":"gn","en":"gn"},
    "author":"Moisés",
    "chapters":50,
    "group":"Pentateuco",
    "name":"Gênesis",
    "testament":"VT"
  },
  {
    "abbrev": {"pt":"ex","en":"ex"},
    "author":"Moises",
    "chapters":40,
    "group":"Pentateuco",
    "name":"Êxodo",
    "testament":"VT"
  },
];

const Item = ( { name } ) => (
  <Book>
    <BookName> { name } </BookName>
  </Book>
)
const Home = () => {
  const renderItem = () => (
    <Item />
  )
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
      <Books data={ BOOKS } renderItem={ renderItem } keyExtractor={ item => item.name }/>
    </Container>
  );
}

export default Home;