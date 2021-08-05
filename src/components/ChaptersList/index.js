import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import {
  Listed, ListChapters, ChapterButton, Margin, ChapterText
} from './styles';

const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik1vbiBBdWcgMDIgMjAyMSAxNjowMzozMyBHTVQrMDAwMC4yMDAwdHR1QGdtYWlsLmNvbSIsImlhdCI6MTYyNzkyMDIxM30.lfeWPXO6QmAaze-ArjWt6GyGJSyoX4Vn022S7zqNnU0";

const Chapter = ( { chapter } ) => (
  <ChapterButton key={chapter}>
    <Margin>
      <ChapterText>{chapter}</ChapterText>
    </Margin>
  </ChapterButton>
)

function ChaptersList({ route, navigation }){
  const { name, abbrev } = route.params;
  const [Chapters, setChapters] = useState([]);

  const buttons = [];
  function looping(){
    for( let i=1; i<=Chapters; i++){
      buttons.push(<Chapter chapter={i}/>)
    }
  }

  useEffect( () => {
    Axios.get(`https://www.abibliadigital.com.br/api/books/${abbrev}`, { 'headers': { 'Authorization': TOKEN } })
    .then( ({data}) => {
      setChapters(data.chapters);
    } )
    .catch( (error) => console.log(error) )
  }, [] )
  looping();
  return(
    <Listed>
        <ListChapters>
          { buttons.map( (chapter) => chapter) }
        </ListChapters>
      </Listed>
  );
}

export default ChaptersList;