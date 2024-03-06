import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-width: 0.4px;
  padding: 8px;
  border-radius: ${(props) => props.theme.size.borderRadius.sm}px;
  margin-top: 8px;
  background-color: ${(props) => props.theme.colors.Background[50]};
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const HeaderInfo = styled.View`
  flex: 1;
`;

export const CheckBoox = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 24px;
  height: 24px;
  border-width: 0.5px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Action = styled.View`
  flex-direction: row;
  height: 40px;
  width: 110px;
  justify-content: center;
  border-radius: ${(props) => props.theme.size.borderRadius.sm}px;
  border-width: 0.4px;
  background-color: ${(props) => props.theme.colors.Secondary};
`;

export const ActionRight = styled.TouchableOpacity`
  width: 30px;
  align-items: center;
  justify-content: center;
`;

export const ActionLeft = styled.TouchableOpacity`
  width: 30px;
  align-items: center;
  justify-content: center;
`;

export const ActionView = styled.View`
  width: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.MildScale[50]};
`;
