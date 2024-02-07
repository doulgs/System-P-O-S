import React, { useState } from "react";
import { useCart } from "../../context/cartContext";
import { formatarParaMoeda } from "../../helpers/utils/formatarParaMoeda";
import { Text } from "../Text";
import { Item } from "../../database/interfaces/Interface-Item";
import { ExcecoesModal } from "../Modal";
import { IconTrash } from "../../assets/icons/Icon-Trash";
import {
  Container,
  ContentInfo,
  ContentAction,
  Button,
  Action,
  ActionQuantidade,
} from "./styles";

interface CardItemProps {
  item: Item;
  index: number;
}

export const CardItem = ({ item, index }: CardItemProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    AddQuantidadeItem,
    RetirarItemCart,
    RetirarQuantidadeItem,
    AdicionarQuantidade,
    RemoverQuantidade,
    RemoverItem,
  } = useCart();

  function AdicionarQuantidadeItemExistente(index: number) {
    AdicionarQuantidade(index);
  }
  function RetirarQuantidadeItemExistente(index: number) {
    if (item.Amount === 1) {
      return;
    }
    RemoverQuantidade(index);
  }

  return (
    <>
      <Container>
        <ContentInfo>
          <Text>{item?.Descricao}</Text>
          <Text weight="600">{formatarParaMoeda(item?.VendaValor ?? 0)}</Text>
        </ContentInfo>

        <ContentAction>
          <ActionQuantidade>
            <Button onPress={() => RetirarQuantidadeItemExistente(index)}>
              <Text color="#fff" weight="600">
                -
              </Text>
            </Button>
            <Text weight="700">{item?.Amount}</Text>
            <Button onPress={() => AdicionarQuantidadeItemExistente(index)}>
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
              onPress={() => RemoverItem(index)}
              style={{ backgroundColor: "red" }}
            >
              <IconTrash />
            </Button>
          </Action>
        </ContentAction>
      </Container>

      <ExcecoesModal
        data={item.Excecoes}
        visible={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
      />
    </>
  );
};
