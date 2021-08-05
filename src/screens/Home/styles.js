import React from 'react';
import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex-grow: 1;
  background: #0E0E0E;
  color: white;
  padding: 96px 16px 0;
`;

export const WelcomeText = styled.Text`
  width: 100%;
  height: auto;
  font-size: 28px;
  padding: 2px 8px;
  color: #e0e0e0;
`;

export const Menu = styled.View`
  width: 100%;
  height: 32px;
  margin-top: 24px;
  background-color: transparent;
  flex-direction: row;
  justify-content: space-between;
`;

export const MenuButtons = styled.View`
  height: 100%;
  flex-direction: row;
`;

export const MenuButtonOld = styled.TouchableOpacity`
  width: 112px;
  height: 100%;
  margin-right: 8px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background-color: #1852E7;
`;
export const MenuButtonNew = styled.TouchableOpacity`
  width: 112px;
  height: 100%;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background-color: #212121;
`;

export const MenuText = styled.Text`
  color: #e0e0e0;
  font-size: 15px;
`;

export const ConfigButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background-color: red;
  justify-content: center;
  align-items: center;
  background-color: #212121;
  border-radius: 8px;
`;