import React from 'react';
import { StatusBar } from 'react-native';
import ArrowImage from '../../assets/arrow-left.png';
import {
  Container, Header, Arrow, SelectText, Name, Chapter
} from './styles';

import VersesList from '../../components/VersesList';

const Verses = ({ route, navigation }) => {
  const { name, abbrev, chapter } = route.params;
  return (
    <Container>
      <StatusBar backgroundColor={ 'transparent' } translucent={ true }/>
      <Header onPress={ () => navigation.goBack() }>
        <Arrow source={ArrowImage}/>
        <SelectText>nvi</SelectText>
      </Header>
      <Name>
        {name+" "}
        <Chapter>{chapter}</Chapter>
      </Name>
      <VersesList route={route} navigation={navigation}/>
    </Container>
  );
}

export default Verses;