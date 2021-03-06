import React from 'react';

import {
  Listed, ListChapters, ChapterButton, Margin, ChapterText
} from './styles';

const Chapter = ( { chapter, navigation, name, abbrev } ) => (
  <ChapterButton key={Math.random(0,1)} onPress={ () => navigation.navigate('Verses',{name: name, abbrev:abbrev, chapter:chapter}) }>
    <Margin>
      <ChapterText>{chapter}</ChapterText>
    </Margin>
  </ChapterButton>
)

function ChaptersList({ route, navigation }){
  const { name, chapters, abbrev } = route.params;
  const buttons = [];
  for( let i=1; i<=chapters; i++) buttons.push(i)

  return(
    <Listed>
        <ListChapters>
          {
            buttons.map( (chapter) =>
              <Chapter
                key={chapter}
                chapter={chapter}
                navigation={navigation}
                name={name}
                abbrev={abbrev}/>)
          }
        </ListChapters>
      </Listed>
  );
}

export default ChaptersList;