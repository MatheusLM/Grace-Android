import React, { useState, useEffect } from 'react';
import { StatusBar, View, Text } from 'react-native';
import Axios from 'axios';

import {
  VerseList, VerseBox, VerseText, VerseNumber
} from './styles';

const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik1vbiBBdWcgMDIgMjAyMSAxNjowMzozMyBHTVQrMDAwMC4yMDAwdHR1QGdtYWlsLmNvbSIsImlhdCI6MTYyNzkyMDIxM30.lfeWPXO6QmAaze-ArjWt6GyGJSyoX4Vn022S7zqNnU0";

const Verse = ({route, navigation, number, text}) => (
  <VerseBox key={number} activeOpacity={0.5}>
    <VerseText>
      <VerseNumber>{number} </VerseNumber>
      {text}
    </VerseText>
  </VerseBox>
)

function VersesList({ route, navigation }){
  const { name, abbrev, chapter } = route.params;
  const [Verses, setVerses] = useState([]);
  useEffect( () => {
    Axios({
      method: "GET",
      url: `https://www.abibliadigital.com.br/api/verses/nvi/${abbrev}/${chapter}`,
      headers: { Authorization: TOKEN }
    })
    .then( ({data}) => setVerses(data.verses) )
  }, [] )
  return(
    <VerseList
      data={Verses}
      keyExtractor={({number}) => number.toString()}
      renderItem={
        ({item}) => <Verse number={item.number} text={item.text}/>
      } />
  )
}

export default VersesList;