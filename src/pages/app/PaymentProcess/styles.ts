import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.Background[50]};
`;
export const Loading = styled.ActivityIndicator`
  color: ${(props) => props.theme.colors.Primary};
  size: 25px;
`;
