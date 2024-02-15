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
  justify-content: flex-end;
  background-color: ${(props) => props.theme.colors.Background[50]};
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

export const Extract = styled.View`
  flex: 1;
  margin: 24px 16px;
  border-radius: 8px;
  border-width: 1px;
`;

export const HeaderExtract = styled.View`
  padding: 4px;
  align-items: center;
  border-bottom-width: 0.5px;
`;

export const BodyExtract = styled.View`
  flex: 1;
`;
export const BodyExtractHeader = styled.View`
  flex-direction: row;
  padding: 4px;
  border-bottom-width: 0.5px;
`;

export const ExtractScrollView = styled.ScrollView`
  flex: 1;
`;

export const BodyExtractItens = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 4px;
`;
export const ContentQtd = styled.View`
  width: 10%;
  justify-content: center;
`;
export const ContentDescricao = styled.View`
  width: 49%;
  justify-content: center;
`;
export const ContentValor = styled.View`
  width: 20%;
  justify-content: center;
`;
export const ContentTotal = styled.View`
  width: 20%;
  justify-content: center;
`;

export const FooterExtract = styled.View``;
