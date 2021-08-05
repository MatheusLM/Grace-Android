import React, { useState, useEffect } from 'react';
import { StatusBar, Image, Text } from 'react-native';
import {
  Container
} from './styles';

const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik1vbiBBdWcgMDIgMjAyMSAxNjowMzozMyBHTVQrMDAwMC4yMDAwdHR1QGdtYWlsLmNvbSIsImlhdCI6MTYyNzkyMDIxM30.lfeWPXO6QmAaze-ArjWt6GyGJSyoX4Vn022S7zqNnU0";

const Verses = ({ route, navigation }) => {
  const { name, abbrev } = route.params;
  return (
    <Container>
      <StatusBar backgroundColor={ 'transparent' } translucent={ true }/>
      <Text>{abbrev}</Text>
      <Text>{name}</Text>
    </Container>
  );
}

export default Verses;