import React from "react";
import { formatarParaMoeda } from "../../helpers/utils/formatarParaMoeda";
import {
  Background,
  Container,
  Content,
  Image,
  Header,
  Footer,
  Action,
  ActionLeft,
  ActionView,
  ActionRight,
} from "./styles";
import { Item } from "../../database/interfaces/Interface-Item";
import { Text } from "../Text";

type ItemLayoutProps = {
  data: Item;
  adicionarQuantidade: () => void;
  removerQuantidade: () => void;
};

export const ItemLayout = ({
  data,
  adicionarQuantidade,
  removerQuantidade,
}: ItemLayoutProps) => {
  const imageAPI = data?.FotoBase64 || null;

  const source = imageAPI
    ? { uri: `data:image/jpeg;base64,${imageAPI}` }
    : require("../../assets/images/NoImage.jpg");

  const backColor = data.Amount >= 1 ? "rgba(10,55,80,0.13)" : "#fcfcfc";

  return (
    <Background style={{ elevation: 3 }}>
      <Container style={{ backgroundColor: backColor }}>
        <Image source={source} resizeMode="cover" />
        <Content>
          <Header>
            <Text weight="700" numberOfLines={2} style={{ maxWidth: "90%" }}>
              {data?.Descricao}
            </Text>
            {/* <CheckBoox onPress={adicionarQuantidade}>
              {data.Amount >= 1 && <CheckIcon />}
            </CheckBoox> */}
          </Header>

          <Footer>
            <Text weight="600">{formatarParaMoeda(data?.VendaValor ?? 0)}</Text>
            <Action>
              <ActionLeft onPress={removerQuantidade}>
                <Text color="#fff" size={28}>
                  -
                </Text>
              </ActionLeft>
              <ActionView>
                <Text weight="600">{data.Amount}</Text>
              </ActionView>
              <ActionRight onPress={adicionarQuantidade}>
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
