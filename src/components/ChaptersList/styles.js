import React from 'react';
import styled from 'styled-components';

export const Listed = styled.ScrollView`
  width: 100%;
  height: auto;
  margin-bottom: 150px;
  padding: 0;
`;

export const ListChapters = styled.View`
  width: 100%;
  height: 100%;
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ChapterButton = styled.TouchableOpacity`
  width: 68px;
  height: 68px;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: transparent;
`;

export const Margin = styled.View`
  width: 84%;
  height: 84%;
  justify-content: center;
  align-items: center;
  background-color: #212121;
  border-radius: 8px;
`;

export const ChapterText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #b0b0b0;
`;