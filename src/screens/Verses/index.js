import React, { useState, useEffect } from 'react';
import { StatusBar, Image } from 'react-native';
import {
  Container
} from './styles';

const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik1vbiBBdWcgMDIgMjAyMSAxNjowMzozMyBHTVQrMDAwMC4yMDAwdHR1QGdtYWlsLmNvbSIsImlhdCI6MTYyNzkyMDIxM30.lfeWPXO6QmAaze-ArjWt6GyGJSyoX4Vn022S7zqNnU0";

const Verses = () => {
  return (
    <Container>
      <StatusBar backgroundColor={ 'transparent' } translucent={ true }/>
    </Container>
  );
}

export default Verses;