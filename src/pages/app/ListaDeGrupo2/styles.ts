import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.Background[100]};
  padding: 8px;
`;

export const Touchable = styled.TouchableOpacity`
  margin: 6px;
  width: 105px;
  height: 105px;
  border-radius: ${(props) => props.theme.size.borderRadius.sm}px;
  background-color: ${(props) => props.theme.colors.MildScale[50]};
`;

export const Codigo = styled.Text`
  margin: 4px;
  color: ${(props) => props.theme.colors.Background[200]};
`;

export const ContainerGrupo2 = styled.View`
  flex: 1;
  align-items: center;
  gap: 2px;
`;

export const Img = styled.Image`
  width: 42px;
  height: 42px;
`;
export const Title = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
`;
