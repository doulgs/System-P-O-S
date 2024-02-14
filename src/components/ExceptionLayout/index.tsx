import React from "react";
import { Grupo2Excecao } from "../../database/interfaces/Interface-Grupo2Excecao";

import { formatarParaMoeda } from "../../helpers/utils/formatarParaMoeda";
import { CheckIcon } from "../../assets/icons/Icon-Check";
import { Text } from "../Text";

import {
  Container,
  Header,
  HeaderInfo,
  CheckBoox,
  Footer,
  Action,
  ActionRight,
  ActionLeft,
  ActionView,
} from "./styles";

type ExceptionLayoutProps = {
  item: Grupo2Excecao;
};

export const ExceptionLayout: React.FC<ExceptionLayoutProps> = ({ item }) => {
  return (
    <Container>
      <Header>
        <CheckBoox onPress={() => {}}>
          {item?.Amount >= 1 && <CheckIcon />}
        </CheckBoox>
        <HeaderInfo>
          <Text weight="700" numberOfLines={2}>
            {item?.Excecao}
          </Text>
          <Text weight="400">{formatarParaMoeda(item?.Valor ?? 0)}</Text>
        </HeaderInfo>
      </Header>

      <Footer>
        <Action>
          <ActionLeft onPress={() => {}}>
            <Text color="#fff" size={28}>
              -
            </Text>
          </ActionLeft>
          <ActionView>
            <Text weight="600">{0}</Text>
          </ActionView>
          <ActionRight onPress={() => {}}>
            <Text color="#fff" size={28}>
              +
            </Text>
          </ActionRight>
        </Action>
      </Footer>
    </Container>
  );
};
