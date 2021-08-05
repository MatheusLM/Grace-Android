import React from 'react';
import styled from 'styled-components';

export const VerseList = styled.FlatList`
  width: 100%;
  flex: 1;
  margin-bottom: 8px;
  background: transparent;
`;

export const VerseBox = styled.TouchableOpacity`
  width: 100%;
  height: auto;
  background-color: transparent;
  padding-top: 4px;
  padding-bottom: 8px;
`;

export const VerseText = styled.Text`
  font-size: 20px;
  color: black;
`;

export const VerseNumber = styled.Text`
  font-size: 20px;
  color: #a0a0a0;
  font-weight: bold;
`;