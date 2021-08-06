import React, { useState, useEffect } from 'react';
import { StatusBar, Text } from 'react-native';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { FormBox, InputText, InputSend, InputSendText } from './styles'

function FormLogin({navigation}){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function login(navigation){
    Axios({
      method: "PUT",
      url: "https://www.abibliadigital.com.br/api/users/token",
      data: { 'email': email, 'password': password }
    })
    .then( ({data}) => {
      const storeData = async (data) => {
        console.log(data)
        try{
          await AsyncStorage.setItem('@EMAIL', JSON.stringify(data.email))
          await AsyncStorage.setItem('@NAME', JSON.stringify(data.name))
          await AsyncStorage.setItem('@TOKEN', JSON.stringify(data.token))
          navigation.navigate("Home")
        }
        catch(e){ console.log(e) }
      }
      storeData(data)
    }) .catch( (e) => console.log(e) )
  }

  return(
    <FormBox>
      <InputText placeholder={"Seu e-mail"} onChangeText={(e) => setEmail(e)} value={email} autoFocus={true}/>
      <InputText placeholder={"Sua senha"} onChangeText={(e) => setPassword(e)} value={password} />
      <InputSend onPress={ () => login(navigation) }>
        <InputSendText>Entrar</InputSendText>
      </InputSend>
    </FormBox>
  );
}

export default FormLogin;