import React, { useState } from "react";
import { formatarParaMoeda } from "../../helpers/utils/formatarParaMoeda";

import { Item } from "../../database/interfaces/Interface-Item";

import { Text } from "../Text";
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

interface OrderItemProps {
  item: Item;
  removerItemDoCarrinho: () => void;
  adicionarQuantidade: () => void;
  removerQuantidade: () => void;
}

export const OrderItem = ({
  item,
  removerItemDoCarrinho,
  adicionarQuantidade,
  removerQuantidade,
}: OrderItemProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Container>
        <ContentInfo>
          <Text>{item?.Descricao}</Text>
          <Text weight="600">{formatarParaMoeda(item?.VendaValor ?? 0)}</Text>
        </ContentInfo>

        <ContentAction>
          <ActionQuantidade>
            <Button activeOpacity={0.8} onPressIn={removerQuantidade}>
              <Text color="#fff" weight="600">
                -
              </Text>
            </Button>
            <Text weight="700">{item?.Amount}</Text>
            <Button activeOpacity={0.8} onPressIn={adicionarQuantidade}>
              <Text color="#fff" weight="600">
                +
              </Text>
            </Button>
          </ActionQuantidade>

          <Action>
            <Button
              activeOpacity={0.8}
              onPressIn={() => setModalVisible(!modalVisible)}
            >
              <Text color="#fff" weight="600">
                EX
              </Text>
            </Button>
            <Button
              onPress={removerItemDoCarrinho}
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
