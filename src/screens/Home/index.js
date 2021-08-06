import React, { useState, useEffect } from 'react';
import { StatusBar, Image } from 'react-native';
import ConfigImage from '../../assets/settings.png';
import ListedBooks from '../../components/BooksList'
import {
  Container, WelcomeText, Menu, MenuButtons, MenuButtonOld, MenuButtonNew, MenuText, ConfigButton, Books, Book, BookName
} from './styles';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ButtonFocused = "#1852e7";
const ButtonUnfocused = "#212121";

function Home ({navigation}){
  const [Testament, setTestament] = useState("VT");
  const [VT, setVT] = useState(ButtonFocused)
  const [NT, setNT] = useState(ButtonUnfocused)

  const [user, setUser] = useState('Usuário')

  function toggle(test){
    setTestament(test);
    (test == "VT")? setVT(ButtonFocused) : setVT(ButtonUnfocused);
    (test == "NT")? setNT(ButtonFocused) : setNT(ButtonUnfocused);
  }

  const getData = async () => {
    try{
      const response = await AsyncStorage.getItem('@NAME')
      setUser( JSON.parse( response ) )
    }catch(e){ console.log(e) }
  }
  getData();
  
  return (
    <Container>
      <StatusBar backgroundColor={ 'transparent' } translucent={ true }/>
      <WelcomeText>Bem Vindo,</WelcomeText>
      <WelcomeText>{user}</WelcomeText>
      <Menu>
        <MenuButtons>
          <MenuButtonOld onPress={ () => { toggle("VT") } } style={{backgroundColor: VT }}>
            <MenuText>Antigo</MenuText>
          </MenuButtonOld>
          <MenuButtonNew onPress={ () => { toggle("NT") } } style={{backgroundColor: NT }}>
            <MenuText>Novo</MenuText>
          </MenuButtonNew>
        </MenuButtons>
        <ConfigButton>
          <Image source={ ConfigImage }/>
        </ConfigButton>
      </Menu>
      <ListedBooks navigation={navigation} testamentOrder={Testament}/>
    </Container>
  );
}

export default Home;