import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.Background[100]};
  padding-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0"};
`;
export const CategoryContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 110px;
  background-color: ${(props) => props.theme.colors.Background[50]};
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView``;
