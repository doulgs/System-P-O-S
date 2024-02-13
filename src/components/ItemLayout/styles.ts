import styled from "styled-components/native";

export const Background = styled.View`
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.MildScale[50]};
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Content = styled.View`
  flex: 1;
  margin: 8px;
`;

export const Image = styled.Image`
  width: 120px;
  height: 110px;
  border-radius: 8px;
  margin: 4px;
`;

export const Header = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
