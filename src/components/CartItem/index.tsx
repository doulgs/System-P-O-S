import React, { useState } from "react";
import { IntItemCart } from "../../Interface";
import { Text } from "../Text";
import {
  Container,
  ContentInfo,
  ContentAction,
  Button,
  Action,
  ActionQuantidade,
} from "./styles";
import { formatarParaMoeda } from "../../helpers/utils/formatarParaMoeda";
import { IconTrash } from "../../assets/icons/Icon-Trash";
import { ExcecoesModal } from "../Modal";

interface CardItemProps {
  item: IntItemCart;
  addAmount: Function;
  removeAmount: Function;
}

export const CardItem = ({ item, addAmount, removeAmount }: CardItemProps) => {
  const [modalVisible, setModalVisible] = useState(false);
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
    <>
      <Container>
        <ContentInfo>
          <Text>{item?.Descricao}</Text>
          <Text weight="600">{formatarParaMoeda(item?.VendaValor)}</Text>
        </ContentInfo>

        <ContentAction>
          <ActionQuantidade>
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
          </ActionQuantidade>

          <Action>
            <Button onPress={() => setModalVisible(!modalVisible)}>
              <Text color="#fff" weight="600">
                EX
              </Text>
            </Button>
            <Button
              onPress={() => setModalVisible(!modalVisible)}
              style={{ backgroundColor: "red" }}
            >
              <IconTrash />
            </Button>
          </Action>
        </ContentAction>
      </Container>

      <ExcecoesModal
        visible={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
      />
    </>
  );
};
