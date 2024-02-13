import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.Background[100]};
`;
export const ContainerTotal = styled.SafeAreaView`
  margin: 8px 16px;
  padding: 8px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.Background[50]};
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 110px;
  background-color: ${(props) => props.theme.colors.Background[50]};
  padding: 16px 24px;
  justify-content: center;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`;

export const FooterContainer = styled.SafeAreaView``;
