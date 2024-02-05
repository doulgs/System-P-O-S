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
  removerItem: Function;
  AdicionarQuantidade: Function;
  RemoverQuantidade: Function;
}

export const CardItem = ({
  item,
  removerItem,
  AdicionarQuantidade,
  RemoverQuantidade,
}: CardItemProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState(item?.Amount);

  function RetirarItemDoCarrinho() {
    removerItem();
  }
  function AdicionarQuantidadeItemExistente() {
    setAmount(amount + 1);
    AdicionarQuantidade();
  }
  function RetirarQuantidadeItemExistente() {
    if (amount !== 1) {
      setAmount(amount - 1);
      RemoverQuantidade();
      return;
    }
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
            <Button onPress={() => RetirarQuantidadeItemExistente()}>
              <Text color="#fff" weight="600">
                -
              </Text>
            </Button>
            <Text weight="700">{amount}</Text>
            <Button onPress={() => AdicionarQuantidadeItemExistente()}>
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
              onPress={() => RetirarItemDoCarrinho()}
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
