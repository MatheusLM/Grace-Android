import React, { useState, useEffect } from 'react';
import { StatusBar, Image, TouchableOpacity } from 'react-native';
import ArrowImage from '../../assets/arrow-left.png';
import Axios from 'axios';
import {
  Container, Header, Arrow, SelectText, Name, Listed, ListChapters, ChapterButton, Margin, ChapterText
} from './styles';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik1vbiBBdWcgMDIgMjAyMSAxNjowMzozMyBHTVQrMDAwMC4yMDAwdHR1QGdtYWlsLmNvbSIsImlhdCI6MTYyNzkyMDIxM30.lfeWPXO6QmAaze-ArjWt6GyGJSyoX4Vn022S7zqNnU0";

const Chapter = ( { chapter } ) => (
  <ChapterButton>
    <Margin>
      <ChapterText>{chapter}</ChapterText>
    </Margin>
  </ChapterButton>
)
function Chapters({ route, navigation }){
  const { name, abbrev } = route.params;
  const renderItem = ( { item } ) => <Item chapter={ item }/>
  const [Chapters, setChapters] = useState([]);
  useEffect( () => {
    Axios.get(`https://www.abibliadigital.com.br/api/books/${abbrev}`, { 'headers': { 'Authorization': TOKEN } })
    .then( ({data}) => setChapters(data.chapters) )
    .catch( (error) => console.log(error) )
  }, [] )
  
  const buttons = [];
  function looping(){
    for( let i=1; i<=Chapters; i++){
      buttons.push(i)
    }
  }
  looping();


  return (
    <Container>
      <StatusBar backgroundColor={ 'transparent' } translucent={ true }/>
      <Header onPress={ () => navigation.goBack() }>
        <Arrow source={ArrowImage}/>
        <SelectText>Selecione o capítulo</SelectText>
      </Header>
      <Name>{name}</Name>
      <Listed>
        <ListChapters>
          {
            buttons.map( (chapter) => <Chapter chapter={chapter}/>) 
          }
        </ListChapters>
      </Listed>
    </Container>
  );
}

export default Chapters;