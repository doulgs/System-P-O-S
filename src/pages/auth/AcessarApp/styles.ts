import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.Primary};
`;

export const ContainerImage = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 250px;
  height: 250px;
`;

export const ContainerInput = styled.View`
  flex: 1;
  align-items: center;
  width: 90%;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 45px;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: ${(props) => props.theme.size.borderRadius.sm}px;
  background-color: ${(props) => props.theme.colors.Background[50]};
  color: ${(props) => props.theme.colors.Background[900]};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.Secondary};
  width: 90%;
  height: 45px;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: ${(props) => props.theme.size.borderRadius.sm}px;
  align-items: center;
  justify-content: center;
`;
export const ButtonConfig = styled.TouchableOpacity``;

export const ErrorContent = styled.View`
  margin: 4px 0;
`;
