import React, { useState, useEffect } from 'react';
import { StatusBar, Text } from 'react-native';

import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { FormBox, InputText, InputSend, InputSendText } from './styles'

function FormSubscribe({navigation}){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function subscribe(){
    Axios({
      method: "POST",
      url: "https://www.abibliadigital.com.br/api/users",
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      data: { 'name': name, 'email': email, 'password': password, 'notifications': false }
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
      <InputText placeholder={"Seu nome"} onChangeText={(e) => setName(e)} value={name} autoFocus={true}/>
      <InputText placeholder={"Seu e-mail"} onChangeText={(e) => setEmail(e)} value={email}/>
      <InputText placeholder={"Sua senha"} onChangeText={(e) => setPassword(e)} value={password} />
      <InputSend onPress={ () => subscribe() }>
        <InputSendText>Cadastrar</InputSendText>
      </InputSend>
    </FormBox>
  );
}

export default FormSubscribe;