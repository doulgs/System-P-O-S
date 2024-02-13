import React, { useState, useEffect } from "react";
import { formatarParaMoeda } from "../../helpers/utils/formatarParaMoeda";

import {
  Background,
  Container,
  Content,
  Image,
  Header,
  CheckBoox,
  Footer,
  Action,
  ActionLeft,
  ActionView,
  ActionRight,
} from "./styles";

import { Item } from "../../database/interfaces/Interface-Item";

import { Text } from "../Text";
import { CheckIcon } from "../../assets/icons/Icon-Check";

type ItemLayoutProps = {
  data: Item;
  adicionarItem: () => void;
  removerItem: () => void;
  adicionarQuantidade: () => void;
  removerQuantidade: () => void;
};

export const ItemLayout = ({
  data,
  adicionarItem,
  removerItem,
  adicionarQuantidade,
  removerQuantidade,
}: ItemLayoutProps) => {
  const [amount, setAmount] = useState<number>(0);

  function handleAdd() {
    if (amount === 0) {
      adicionarItem();
      setAmount(amount + 1);
      return;
    } else if (amount > 0) {
      adicionarQuantidade();
      setAmount(amount + 1);
      return;
    }
  }

  function handleRemove() {
    if (amount === 1) {
      removerItem();
      setAmount(amount - 1);
      return;
    } else if (amount > 1) {
      removerQuantidade();
      setAmount(amount - 1);
      return;
    }
  }

  return (
    <Background style={{ elevation: 3 }}>
      <Container>
        <Image source={require("../../assets/images/NoImage.jpg")} />
        <Content>
          <Header>
            <Text weight="700" numberOfLines={2}>
              {data?.Descricao}
            </Text>
            <CheckBoox onPress={handleAdd}>
              {amount >= 1 && <CheckIcon />}
            </CheckBoox>
          </Header>

          <Footer>
            <Text weight="600">{formatarParaMoeda(data?.VendaValor ?? 0)}</Text>
            <Action>
              <ActionLeft onPress={handleRemove}>
                <Text color="#fff" size={28}>
                  -
                </Text>
              </ActionLeft>
              <ActionView>
                <Text weight="600">{amount}</Text>
              </ActionView>
              <ActionRight onPress={handleAdd}>
                <Text color="#fff" size={28}>
                  +
                </Text>
              </ActionRight>
            </Action>
          </Footer>
        </Content>
      </Container>
    </Background>
  );
};
