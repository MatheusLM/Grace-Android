import React from 'react';
import styled from 'styled-components';

export const Books = styled.FlatList`
  width: 100%;
  flex-grow: 1;
  flex: 1;
  margin-top: 28px;
  margin-bottom: 8px;
  background-color: transparent;
`;
export const Book = styled.TouchableOpacity`
  width: 100%;
  height: 72px;
  background-color: #212121;
  margin-bottom: 8px;
  border-radius: 8px;
  justify-content: center;
  padding: 8px 24px;
`;
export const BookName = styled.Text`
  color: #b0b0b0;
  font-size: 17px;
`;