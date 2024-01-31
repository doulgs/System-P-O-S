import styled from "styled-components/native";

export const Product = styled.TouchableOpacity`
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
export const Separator = styled.View`
  width: 100%;
  height: 0.5px;
  background-color: #cacaca;
  margin: 16px 0;
`;
export const AddToCartButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
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
