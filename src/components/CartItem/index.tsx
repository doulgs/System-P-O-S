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
}

export const CardItem = ({ item }: CardItemProps) => {
  const [amount, setAmount] = useState(item?.Amount);
  return (
    <Container>
      <ContentInfo>
        <Text>{item?.Descricao}</Text>
        <Text weight="600">{formatarParaMoeda(item?.VendaValor)}</Text>
      </ContentInfo>

      <ContentAction>
        <Action>
          <Button>
            <Text color="#fff" weight="600">
              -
            </Text>
          </Button>
          <Text weight="700">{amount}</Text>
          <Button>
            <Text color="#fff" weight="600">
              +
            </Text>
          </Button>
        </Action>
      </ContentAction>
    </Container>
  );
};
