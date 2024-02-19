import styled from "styled-components/native";

export const Background = styled.View`
  overflow: hidden; /* Garante que os elementos não ultrapassem os limites do contêiner */
  background-color: ${(props) => props.theme.colors.MildScale[50]};
  margin: 8px 12px 8px 12px;
  border-radius: 8px;
`;

export const Container = styled.View`
  flex-direction: row;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Image = styled.Image`
  width: 120px;
  height: 110px;
  border-radius: 8px;
  margin: 4px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
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
  justify-content: space-between;
  padding: 8px;
`;

export const Action = styled.View`
  flex-direction: row;
  height: 40px;
  width: 110px;
  justify-content: center;
  border-radius: 8px;
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
