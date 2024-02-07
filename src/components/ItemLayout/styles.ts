import styled from "styled-components/native";

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 120px;
  height: 96px;
  border-radius: 8px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  gap: 8px;
  margin-left: 16px;
`;

export const AddToCartButtonStyle = styled.TouchableOpacity`
  border-color: ${(props) => props.theme.colors.Secondary};
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border-width: 2px;
  align-items: center;
  justify-content: center;
`;

export const AddToCartButton = styled.View`
  position: absolute;
  bottom: 10px;
  right: 5px;
`;

export const Acao = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonActionRemove = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.Secondary};
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const ButtonActionAdd = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.Secondary};
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;
export const ActionContentAmount = styled.View`
  width: 40px;
  height: 31px;
  align-items: center;
  justify-content: center;
  border-top-width: 0.5px;
  border-bottom-width: 0.5px;
  border-color: ${(props) => props.theme.colors.Secondary};
`;
