import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  gap: 8px;
  padding: 16px;
`;
export const Input = styled.TextInput`
  height: 55px;
  border-color: ${(props) => props.theme.colorBase.Black};
  background: ${(props) => props.theme.colors.Background[50]};
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
  padding: 16px;
`;
export const ContentLine = styled.View`
  height: 55px;
  border-color: ${(props) => props.theme.colorBase.Black};
  background: ${(props) => props.theme.colors.Background[50]};
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
  padding: 16px;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.Background[500]};
`;
export const SubTitle = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.colors.Background[800]};
`;
export const ContentButton = styled.View`
  margin: 2px 16px;
`;
