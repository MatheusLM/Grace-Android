import React from 'react';
import styled from 'styled-components';

export const FormBox = styled.View`
  width: 88%;
  background: transparent;
  margin-top: 16px;
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


export const ModalAlert = styled.Modal`
  width: 100%;
  height: 100%;
  background: transparent;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.View`
  width: 80%;
  padding: 32px 16px;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.8);
  border-radius: 8px;
`;

export const ModalText = styled.Text`
  font-size: 18px;
  color: #b0b0b0;
`;

export const ModalButton = styled.TouchableOpacity`
  width: 50%;
  height: 48px;
  background: #1852e7;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 16px;
`;

export const ModalButtonText = styled.Text`
  font-size: 18px;
  color: #e0e0e0;
`;