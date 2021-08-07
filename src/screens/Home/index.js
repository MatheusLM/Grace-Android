import React, { useState, useEffect } from 'react';
import { StatusBar, Image, SafeAreaView, Text } from 'react-native';
import ConfigImage from '../../assets/settings.png';
import ListedBooks from '../../components/BooksList'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CloseIcon from '../../assets/close.png'

import {
  Container, WelcomeText,
  Menu, MenuButtons, MenuButtonOld, MenuButtonNew, MenuText,
  ConfigButton, ConfigModal, ConfigCenter, ConfigBox, ConfigHeader, ConfigTitle, ConfigClose,
  ConfigCloseImage, LogoutButton, LogoutButtonText, ConfigArea, ConfigList, ConfigField, 
  ConfigName, ConfigSwitch, 
} from './styles';

const ButtonFocused = "#1852e7";
const ButtonUnfocused = "#212121";

function Home ({navigation}){
  const [Testament, setTestament] = useState("VT");
  const [ModalVisible, setModalVisible] = useState(false);
  const [VT, setVT] = useState(ButtonFocused)
  const [NT, setNT] = useState(ButtonUnfocused)

  const [DarkMode, setDarkMode] = useState(true);

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
  function disconnect(navigation){
    const getToken = async () => {
      try{
        await AsyncStorage.setItem('@TOKEN', '');
      }catch(e){ console.log(e) }
    }
    getToken();
    navigation.navigate("Login")
  }
  getData();
  return (
    <Container>
      <StatusBar backgroundColor={ 'transparent' } translucent={ true } barStyle="light-content"/>
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
        <ConfigButton onPress={ () => setModalVisible(true) }>
          <Image source={ ConfigImage }/>
        </ConfigButton>
        <ConfigModal animationType={'slide'} visible={ModalVisible}>
          <ConfigCenter>
            <ConfigBox>
              <ConfigHeader>
                <ConfigTitle>Configuração</ConfigTitle>
                <ConfigClose onPress={ () => setModalVisible(false) }>
                  <ConfigCloseImage source={CloseIcon}/>
                </ConfigClose>
              </ConfigHeader>
              <ConfigArea>
                <ConfigList>
                  <ConfigField>
                    <ConfigName>Modo escuro</ConfigName>
                    <ConfigSwitch 
                      trackColor={ {true: "#73cfff", false: "#555"} }
                      thumbColor={ DarkMode ? "#1476a8" : "#333" }
                      onValueChange={ () => setDarkMode(!DarkMode) }
                      value={ DarkMode }/>
                  </ConfigField>
                </ConfigList>
              </ConfigArea>
              <LogoutButton onPress={ () => disconnect(navigation) }>
                <LogoutButtonText>Desconectar</LogoutButtonText>
              </LogoutButton>
            </ConfigBox>
          </ConfigCenter>
        </ConfigModal>
      </Menu>
      <ListedBooks navigation={navigation} testamentOrder={Testament}/>
    </Container>
  );
}

export default Home;