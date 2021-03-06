import React, { useState, useEffect } from 'react';
import { StatusBar, View, Text } from 'react-native';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { VerseList, VerseBox, VerseText, VerseNumber } from './styles';

const Verse = ({route, number, text}) => (
  <VerseBox key={number} activeOpacity={0.5}>
    <VerseText>
      <VerseNumber>{number} </VerseNumber>
      {text}
    </VerseText>
  </VerseBox>
)

function VersesList({ route }){
  const { name, abbrev, chapter } = route.params;
  const [Verses, setVerses] = useState([]);

  const getData = async () => {
    try{
      const result = await AsyncStorage.getItem(`@${abbrev}-${chapter}`)
      const TOKEN = await AsyncStorage.getItem('@TOKEN')
      if( !result ){
        Axios({
          method: "GET",
          url: `https://www.abibliadigital.com.br/api/verses/nvi/${abbrev}/${chapter}`,
          headers: { Authorization: "Bearer "+JSON.parse(TOKEN) }
        })
        .then( ({data}) => {
          setVerses(data.verses);
          AsyncStorage.setItem(`@${abbrev}-${chapter}`, JSON.stringify(data.verses));
        } )
      }else{
        setVerses(JSON.parse(result))
      }
    }catch(e){ console.log(e) }
  }

  useEffect( () => {
    getData();
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