import React, { useState, useEffect } from 'react';
import { StatusBar, Text } from 'react-native';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { FormBox, InputText, InputSend, InputSendText, ModalAlert, ModalContainer, ModalBox, ModalText, ModalButton, ModalButtonText } from './styles'

function FormLogin({navigation}){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [modalText, setModalText] = useState("Erro")

  function login(navigation){
    Axios({
      method: "PUT",
      url: "https://www.abibliadigital.com.br/api/users/token",
      data: { 'email': email, 'password': password }
    })
    .then( ({data}) => {
      const storeData = async (data) => {
        try{
          await AsyncStorage.setItem('@EMAIL', JSON.stringify(data.email))
          await AsyncStorage.setItem('@NAME', JSON.stringify(data.name))
          await AsyncStorage.setItem('@TOKEN', JSON.stringify(data.token))
          navigation.navigate("Home")
        }
        catch(e){ console.log(e) }
      }
      storeData(data)
    })
    .catch( ({message}) => {
      if( message == "Request failed with status code 404" ){
        setModalText("Dados incorretos")
      }else{
        setModalText("Senha incorreta")
      }
      setModalVisible(true)
    } )
  }

  return(
    <FormBox>
      <InputText placeholder={"Seu e-mail"} onChangeText={(e) => setEmail(e)} value={email} autoFocus={true}/>
      <InputText placeholder={"Sua senha"} onChangeText={(e) => setPassword(e)} value={password} />
      <InputSend onPress={ () => login(navigation) }>
        <InputSendText>Entrar</InputSendText>
      </InputSend>
      <ModalAlert animationType={"slide"} visible={modalVisible} transparent={true}>
        <ModalContainer>
          <ModalBox>
            <ModalText>{modalText}</ModalText>
            <ModalButton onPress={ () => setModalVisible(false) }>
              <ModalButtonText>Fechar</ModalButtonText>
            </ModalButton>
          </ModalBox>
        </ModalContainer>
      </ModalAlert>
    </FormBox>
  );
}

export default FormLogin;