import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 8px;
`;
export const Content = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.Background[50]};
  margin-bottom: 16px;
  border-radius: ${(props) => props.theme.size.borderRadius.sm}px;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Box = styled.View``;
