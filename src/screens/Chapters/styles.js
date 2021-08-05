import React from 'react';
import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex-grow: 1;
  background: #0E0E0E;
  color: white;
  padding: 44px 22px 0;
`;

export const Header = styled.TouchableOpacity`
  width: 100%;
  height: auto;
  padding: 20px 0 0;
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const Arrow = styled.Image`
  align-self: flex-start;
  width: 20px;
  height: 20px;
`;

export const SelectText = styled.Text`
  font-size: 18px;
  height: 28px;
  width: 100%;
  text-align: center;
  margin-left: -20px;
  padding: 0;
  font-weight: bold;
  color: #b0b0b0;
`;

export const Name = styled.Text`
  font-size: 36px;
  font-weight: bold;
  width: 100%;
  height: auto;
  margin-bottom: 32px;
  background-color: transparent;
  color: #b0b0b0;
`;