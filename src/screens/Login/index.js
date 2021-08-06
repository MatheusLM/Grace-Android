import React, { useState, useEffect } from 'react';
import { StatusBar, Text } from 'react-native';
import {
  Container, HelloBox, HelloTitle, HelloText, HelloInformation,
  Buttons, Button, ButtonText
} from './styles';

import FormLogin from '../../components/FormLogin';
import FormSubscribe from '../../components/FormSubscribe';

const ButtonFocused = "#1852e7";
const ButtonUnfocused = "#212121";

function Actions({navigation}){
  const [Form, setForm] = useState("Subscribe")
  const [Subscribe, setSubscribe] = useState(ButtonFocused)
  const [Login, setLogin] = useState(ButtonUnfocused)
  function toggle(test){
    setForm(test);
    (test == "Login")? setLogin(ButtonFocused) : setLogin(ButtonUnfocused);
    (test == "Subscribe")? setSubscribe(ButtonFocused) : setSubscribe(ButtonUnfocused);
  }
  return(
    <Container>
      <StatusBar backgroundColor={ 'transparent' } translucent={ true }/>
      <HelloBox>
        <HelloTitle>Olá,</HelloTitle>
        <HelloText>
          Seja bem-vindo ao Grace!
        </HelloText>
      </HelloBox>
      <Buttons>
        <Button onPress={ () => { toggle("Subscribe") } } style={{backgroundColor: Subscribe }}>
          <ButtonText>Cadastrar</ButtonText>
        </Button>
        <Button onPress={ () => { toggle("Login") } } style={{backgroundColor: Login }}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Buttons>
      { (Form == "Login") ? <FormLogin navigation={navigation}/> : <FormSubscribe navigation={navigation}/> }
    </Container>
  )
}

export default Actions;