import styled from "styled-components/native";

export const Container = styled.View`
  padding: 8px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerProduto = styled.View`
  flex-direction: row;
`;

export const Acao = styled.View`
  flex-direction: row;
  gap: 24px;
`;

export const Imagem = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 6px;
`;

export const QuantidadeContainer = styled.View`
  min-width: 20px;
  margin-left: 12px;
`;

export const DetalhesProduto = styled.View`
  flex: 1;
  margin-left: 12px;
  max-width: 40%;
`;

export const ButtonAction = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.Secondary};
  width: 36px;
  height: 36px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Resumo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerTotal = styled.View`
  flex: 1;
  margin-right: 32px;
`;
