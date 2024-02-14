import styled from "styled-components/native";

export const ContentEx = styled.View`
  flex: 1;
  padding: 4px;
  margin: 4px;
  margin-bottom: 8px;
  background-color: ${(props) => props.theme.colors.Background[50]};
`;

export const HeaderEx = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const CheckBooxEx = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 24px;
  height: 24px;
  border-width: 0.5px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const FooterEx = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ActionEx = styled.View`
  flex-direction: row;
  height: 40px;
  width: 110px;
  justify-content: center;
  border-radius: 8px;
  border-width: 0.4px;
  background-color: ${(props) => props.theme.colors.Secondary};
`;

export const ActionRightEx = styled.TouchableOpacity`
  width: 30px;
  align-items: center;
  justify-content: center;
`;

export const ActionLeftEx = styled.TouchableOpacity`
  width: 30px;
  align-items: center;
  justify-content: center;
`;

export const ActionViewEx = styled.View`
  width: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.MildScale[50]};
`;
