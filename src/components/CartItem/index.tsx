import React, { useState } from "react";
import { IntItemCart } from "../../Interface";
import { Text } from "../Text";
import {
  Container,
  ContentInfo,
  ContentAction,
  Button,
  Action,
} from "./styles";
import { formatarParaMoeda } from "../../helpers/utils/formatarParaMoeda";

interface CardItemProps {
  item: IntItemCart;
  addAmount: Function;
  removeAmount: Function;
}

export const CardItem = ({ item, addAmount, removeAmount }: CardItemProps) => {
  const [amount, setAmount] = useState(item?.Amount);

  function adicionarQuantidade() {
    addAmount();
    setAmount(amount + 1);
  }
  function removerQuantidade() {
    removeAmount();
    if (amount === 0) {
      setAmount(0);
      return;
    }
    setAmount(amount - 1);
  }
  return (
    <Container>
      <ContentInfo>
        <Text>{item?.Descricao}</Text>
        <Text weight="600">{formatarParaMoeda(item?.VendaValor)}</Text>
      </ContentInfo>

      <ContentAction>
        <Action>
          <Button onPress={removerQuantidade}>
            <Text color="#fff" weight="600">
              -
            </Text>
          </Button>
          <Text weight="700">{amount}</Text>
          <Button onPress={adicionarQuantidade}>
            <Text color="#fff" weight="600">
              +
            </Text>
          </Button>
        </Action>
      </ContentAction>
    </Container>
  );
};
