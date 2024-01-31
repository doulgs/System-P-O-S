import styled from "styled-components/native";

export const Touchable = styled.TouchableOpacity``;

export const Category = styled.View`
  align-items: center;
  margin-left: 24px;
`;

export const Icon = styled.View`
  background-color: ${(props) => props.theme.colors.Background[100]};
  width: 44px;
  height: 44px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  elevation: 2;
  margin-bottom: 4px;
`;
