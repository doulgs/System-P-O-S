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
import { useState } from "react";
import { ExcecoesModal } from "../../../components/Modal";

const Cart = () => {
  const { cart, AddItemCart, RemoveItemCart, cartTotal } = useCart();

  return (
    <>
      <Container>
        <MenuContainer>
          <ContainerTotal>
            <Text weight="700" size={20}>
              Valor Total do Pedido
            </Text>
            <Text weight="700" size={20}>
              {formatarParaMoeda(cartTotal)}
            </Text>
          </ContainerTotal>

          <FlatList
            data={cart}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <CardItem
                item={item}
                addAmount={() => AddItemCart(item)}
                removeAmount={() => RemoveItemCart(item)}
              />
            )}
            //ListEmptyComponent={() => <Empty />}
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
