import React from 'react';
import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex-grow: 1;
  background: #0E0E0E;
  color: white;
  padding: 104px 8px 0;
  align-items: center;
`;

export const HelloBox = styled.View`
  width: 88%;
  height: auto;
`;

export const HelloTitle = styled.Text`
  font-size: 48px;
  color: #b0b0b0;
`;

export const HelloText = styled.Text`
  font-size: 24px;
  color: #b0b0b0;
  margin-bottom: 32px;
`;

export const HelloInformation = styled.Text`
  font-size: 18px;
  color: #b0b0b0;
  margin-bottom: 32px;
`;

export const Buttons = styled.View`
  width: 88%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 48%;
  height: 36px;
  background: #212121;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: white;
`;