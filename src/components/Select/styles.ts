import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 50px;
  padding: 0 12px;
  margin: 0 16px;
  border-radius: ${(props) => props.theme.size.borderRadius.sm}px;
  font-size: 18px;
  border-color: #000;
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerModal = styled.View`
  flex: 1;
`;
export const HeaderModal = styled.View`
  height: 70px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: ${(props) => props.theme.colors.Primary};
  margin-bottom: 16px;
`;
export const ButtonClose = styled.TouchableOpacity`
  height: 32px;
  width: 32px;
  align-items: center;
  justify-content: center;
`;

export const BodyModal = styled.View`
  flex: 1;
`;

export const Touchable = styled.TouchableOpacity`
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-width: 0.5px;
  margin: 8px;
  border-radius: ${(props) => props.theme.size.borderRadius.sm}px;
`;
export const Box = styled.View`
  margin: 8px;
  width: 24px;
  height: 24px;
  border-radius: ${(props) => props.theme.size.borderRadius.sm}px;
  border-width: 0.5px;
  align-items: center;
  justify-content: center;
`;
