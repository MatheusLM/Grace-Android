import React, { useState, useEffect } from 'react';
import { StatusBar, Image, Text } from 'react-native';
import ArrowImage from '../../assets/arrow-left.png';
import {
  Container, Header, Arrow, SelectText, Name, Chapter
} from './styles';

const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik1vbiBBdWcgMDIgMjAyMSAxNjowMzozMyBHTVQrMDAwMC4yMDAwdHR1QGdtYWlsLmNvbSIsImlhdCI6MTYyNzkyMDIxM30.lfeWPXO6QmAaze-ArjWt6GyGJSyoX4Vn022S7zqNnU0";

const Verses = ({ route, navigation }) => {
  const { name, abbrev, chapter } = route.params;
  return (
    <Container>
      <StatusBar backgroundColor={ 'transparent' } translucent={ true }/>
      <Header onPress={ () => navigation.goBack() }>
        <Arrow source={ArrowImage}/>
        <SelectText>Voltar para capítulos</SelectText>
      </Header>
      <Name>
        {name+" "}
        <Chapter>{chapter}</Chapter>
      </Name>
    </Container>
  );
}

export default Verses;