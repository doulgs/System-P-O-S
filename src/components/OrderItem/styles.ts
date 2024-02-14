import styled from "styled-components/native";

export const Container = styled.View`
  margin: 8px 16px;
  padding: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.MildScale[50]};
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

export const ActionMenu = styled.View`
  flex-direction: row;
  gap: 24px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.Secondary};
  width: 36px;
  height: 36px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
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