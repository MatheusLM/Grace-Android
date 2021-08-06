import React from 'react';
import styled from 'styled-components';

export const FormBox = styled.View`
  width: 88%;
  background: transparent;
  margin-top: 32px;
`;

export const InputText = styled.TextInput`
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  font-size: 18px;
  color: white;
  background: #212121;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const InputSend = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  background: #1852e7;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const InputSendText = styled.Text`
  font-size: 18px;
  color: white;
`;