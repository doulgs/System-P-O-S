import styled from "styled-components/native";

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  background: rgba(0, 0, 0, 0.6);
  justify-content: center;
  padding: 0 16px 16px 16px;
`;

export const ModalBody = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.Background[50]};
  border-radius: 16px;
  padding: 24px;
  margin-top: 25%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.View`
  flex: 1;
  margin-top: 24px;
`;

export const Input = styled.TextInput`
  height: 45px;
  background: ${(props) => props.theme.colors.Background[50]};
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const FormBody = styled.View`
  flex: 1;
`;

export const FormFooter = styled.View``;

////////// MODAL BODY

export const Container = styled.View`
  margin: 4px 0;
  padding: 8px;
  background-color: ${(props) => props.theme.colors.Background[50]};
  border-bottom-width: 0.3px;
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
  margin: 8px 4px;
  align-items: center;
  gap: 16px;
`;

export const Action = styled.View`
  flex-direction: row;
  margin: 14px 8px;
  align-items: center;
  gap: 16px;
`;

export const ButtonAction = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.Secondary};
  width: 36px;
  height: 36px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;
