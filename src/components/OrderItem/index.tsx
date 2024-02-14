import { formatarParaMoeda } from "../../helpers/utils/formatarParaMoeda";

import { Item } from "../../database/interfaces/Interface-Item";

import { Text } from "../Text";
import { IconTrash } from "../../assets/icons/Icon-Trash";

import {
  Container,
  ContentInfo,
  ContentDescription,
  ContentAction,
  Button,
  Action,
  ActionLeft,
  ActionView,
  ActionRight,
  ActionMenu,
} from "./styles";
import { View } from "react-native";

interface OrderItemProps {
  item: Item;
  removerItemDoCarrinho: () => void;
  adicionarQuantidade: () => void;
  removerQuantidade: () => void;
  abrirExcecoes: () => void;
}

export const OrderItem = ({
  item,
  removerItemDoCarrinho,
  adicionarQuantidade,
  removerQuantidade,
  abrirExcecoes,
}: OrderItemProps) => {
  return (
    <>
      <Container>
        <ContentInfo>
          <ContentDescription>
            <Text>{item?.Descricao}</Text>
            <Text weight="600">{formatarParaMoeda(item?.VendaValor ?? 0)}</Text>
          </ContentDescription>
          {item?.Excecoes.map((value, index, array) => {
            if (value.Amount >= 1) {
              return (
                <Text
                  key={index}
                  style={{ marginVertical: 4 }}
                  numberOfLines={2}
                >
                  {" "}
                  {"\u2022"} x{value.Amount ?? 0} {value.Excecao}
                </Text>
              );
            }
          })}
        </ContentInfo>

        <ContentAction>
          <Action>
            <ActionLeft onPress={removerQuantidade}>
              <Text color="#fff" size={28}>
                -
              </Text>
            </ActionLeft>
            <ActionView>
              <Text weight="600">{item?.Amount}</Text>
            </ActionView>
            <ActionRight onPress={adicionarQuantidade}>
              <Text color="#fff" size={28}>
                +
              </Text>
            </ActionRight>
          </Action>

          <ActionMenu>
            {item?.Excecoes.length > 0 && (
              <Button activeOpacity={0.8} onPressIn={abrirExcecoes}>
                <Text color="#fff" weight="600">
                  EX
                </Text>
              </Button>
            )}

            <Button
              onPress={removerItemDoCarrinho}
              style={{ backgroundColor: "red" }}
            >
              <IconTrash />
            </Button>
          </ActionMenu>
        </ContentAction>
      </Container>
    </>
  );
};
