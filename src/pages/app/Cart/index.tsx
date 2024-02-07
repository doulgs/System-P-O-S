import { FlatList } from "react-native";
import { useCart } from "../../../context/cartContext";
import { CardItem } from "../../../components/CartItem";
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

const Cart = () => {
  const { cart, cartTotal } = useCart();

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
            keyExtractor={(index) => index.toString()}
            renderItem={({ item, index }) => (
              <CardItem item={item} index={index} />
            )}
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
