import { FlatList } from "react-native";
import { Button } from "../../../components/Button";
import { Text } from "../../../components/Text";
import { formatarParaMoeda } from "../../../helpers/utils/formatarParaMoeda";
import {
  Container,
  ContainerTotal,
  Footer,
  FooterContainer,
  MenuContainer,
} from "./styles";
import { useCart } from "../../../context/cartContext";
import { CardItem } from "../../../components/CartItem";
import React, { useState } from "react";
import { IntItemCart } from "../../../Interface";
import { useFocusEffect } from "@react-navigation/native";

const Cart = () => {
  const { cart, AddItemCart } = useCart();

  return (
    <>
      <Container>
        <MenuContainer>
          <ContainerTotal>
            <Text weight="700" size={20}>
              Valor Total do Pedido
            </Text>
            <Text weight="700" size={20}>
              {formatarParaMoeda(100)}
            </Text>
          </ContainerTotal>

          <FlatList
            data={cart}
            keyExtractor={(item) => String(item.Handle)}
            renderItem={({ item }) => <CardItem item={item} />}
          />
        </MenuContainer>

        <Footer>
          <FooterContainer>
            <Button onPress={() => {}} disabled={cart.length === 0}>
              Finalizar
            </Button>
          </FooterContainer>
        </Footer>
      </Container>
    </>
  );
};

export default Cart;
