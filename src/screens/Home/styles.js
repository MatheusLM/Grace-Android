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

export const ConfigModal = styled.Modal`
  width: 100%;
`;

export const ConfigCenter = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #0e0e0e;
  padding: 32px 0 8px 0;
`;

export const ConfigBox = styled.View`
  flex: 1;
  width: 88%;
  background: transparent;
`;

export const ConfigHeader = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  background: transparent;
  flex-direction: row;
  margin-bottom: 32px;
`;

export const ConfigTitle = styled.Text`
  width: 100%;
  font-size: 32px;
  color: #b0b0b0;
  font-weight: bold;
  text-align: center;
  margin-right: -36px;
`;

export const ConfigClose = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  background: #212121;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  align-self: flex-end;
`;

export const ConfigCloseImage = styled.Image`
  width: 24px;
  height: 24px;
  background: transparent;
`;

export const ConfigArea = styled.View`
  width: 100%;
  flex: 1;
  padding: 2px;
`;

export const ConfigList = styled.ScrollView`
  width: 100%;
  flex: 1;
`;

export const ConfigField = styled.View`
  width: 100%;
  margin-bottom: 16px;
  flex-direction: row;
`;

export const ConfigName = styled.Text`
  width: 50%;
  flex: 1;
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: bold;
  color: #b0b0b0;
  align-self: flex-start;
`;

export const ConfigSwitch = styled.Switch`
  width: 50px;
  align-self: flex-start;
`;

export const LogoutButton = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  background: #212121;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 16px;
`;

export const LogoutButtonText = styled.Text`
  font-size: 20px;
  color: white;
`;