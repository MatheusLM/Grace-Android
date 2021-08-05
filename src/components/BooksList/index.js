import React, { useState } from 'react';
import { Text } from 'react-native';

import BooksList from '../../assets/books.json';

import {
  Books, Book, BookName
} from './styles';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ListedBooks( { navigation } ){
  function toggle(Test){ SetTestament(Test) }
  const [Testament, SetTestament] = useState("VT")

  const Item = ( { name, testament, abbrev, chapters } ) => (testament == Testament)? (
    <Book key={name} onPress={ () => navigation.navigate('Chapters',{ name: name, abbrev: abbrev, chapters: chapters }) }>
      <BookName> { name } </BookName>
    </Book>
  ):null
  const renderItem = ( { item } ) => <Item name={ item.name } abbrev={ item.abbrev.pt } testament={ item.testament } chapters={ item.chapters }/>

  return(
    <Books
        data={BooksList}
        keyExtractor={ item => item.name }
        renderItem={ renderItem }/>
  );
}

export default ListedBooks;