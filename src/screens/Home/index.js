import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StatusBar, Image } from 'react-native';
import ConfigImage from '../../assets/settings.png';
import ListedBooks from '../../components/BooksList'
import {
  Container, WelcomeText, Menu, MenuButtons, MenuButtonOld, MenuButtonNew, MenuText, ConfigButton, Books, Book, BookName
} from './styles';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ButtonFocused = "#1852e7";
const ButtonUnfocused = "#212121";

function Home ({navigation}){
  const [Testament, setTestament] = useState("VT");
  const [VT, setVT] = useState(ButtonFocused)
  const [NT, setNT] = useState(ButtonUnfocused)

  function toggle(test){
    setTestament(test);
    (test == "VT")? setVT(ButtonFocused) : setVT(ButtonUnfocused);
    (test == "NT")? setNT(ButtonFocused) : setNT(ButtonUnfocused);
  }
  
  return (
    <Container>
      <StatusBar backgroundColor={ 'transparent' } translucent={ true }/>
      <WelcomeText>Bem Vindo,</WelcomeText>
      <WelcomeText>Matheus Lopes Marques</WelcomeText>
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