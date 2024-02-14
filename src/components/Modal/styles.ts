import styled from "styled-components/native";

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  background: rgba(0, 0, 0, 0.6);
  justify-content: center;
  padding: 0 12px 12px 12px;
`;

export const ModalBody = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.Background[50]};
  border-radius: 16px;
  margin-top: 25%;
`;

export const Header = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 0.5px;
  padding: 0 16px;
`;
export const Body = styled.View`
  flex: 1;
  padding: 16px;
`;
export const Footer = styled.View`
  height: 60px;
  padding: 0 16px;
`;
export const ContainerX = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
`;
export const Title = styled.View`
  padding: 4px 0;
  margin-bottom: 8px;
`;
