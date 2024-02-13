import styled from "styled-components/native";

export const Container = styled.View`
  margin: 8px 16px;
  padding: 8px;
  border-radius: 8px;

  background-color: ${(props) => props.theme.colors.Background[50]};
`;
export const ContentInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ContentAction = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ActionQuantidade = styled.View`
  flex-direction: row;
  margin: 14px 8px;
  align-items: center;
  gap: 16px;
`;

export const Action = styled.View`
  flex-direction: row;
  margin: 14px 8px;
  align-items: center;
  gap: 16px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.Secondary};
  width: 36px;
  height: 36px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;
