import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.Primary};
`;

export const ContentInput = styled.View`
  border-color: #fff;
  height: 45px;
  border-bottom-width: 1px;
  padding: 8px;
  margin-bottom: 16px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#fff",
})`
  flex: 1;
  color: ${(props) => props.theme.colorBase.White};
`;

export const Button = styled.TouchableOpacity`
  height: 45px;
  margin: 24px 0px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.Secondary};
`;
export const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.colorBase.White};
`;
