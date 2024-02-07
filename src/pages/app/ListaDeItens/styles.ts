import styled from "styled-components/native";

export const Separator = styled.View`
  width: 100%;
  height: 0.5px;
  background-color: #cacaca;
  margin: 16px 0;
`;

export const Footer = styled.View`
  min-height: 80px;
  background-color: ${(props) => props.theme.colors.Background[50]};
  padding: 16px 24px;
  justify-content: center;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`;

export const FooterContainer = styled.SafeAreaView``;
