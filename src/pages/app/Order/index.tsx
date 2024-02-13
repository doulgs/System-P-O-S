import { FlatList } from "react-native";
import { OrderItem } from "../../../components/OrderItem";
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
import { useOrder } from "../../../context/orderContext";

const Order = () => {
  const {
    order,
    RemoverItem,
    AdicionarQuantidade,
    RemoverQuantidade,
    orderTotal,
  } = useOrder();
  return (
    <>
      <Container>
        <MenuContainer>
          <ContainerTotal>
            <Text weight="700" size={20}>
              Valor Total do Pedido
            </Text>
            <Text weight="700" size={20}>
              {formatarParaMoeda(orderTotal)}
            </Text>
          </ContainerTotal>

          <FlatList
            data={order}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <OrderItem
                item={item}
                removerItemDoCarrinho={() => RemoverItem(index)}
                adicionarQuantidade={() => AdicionarQuantidade(index)}
                removerQuantidade={() => RemoverQuantidade(index)}
              />
            )}
          />
        </MenuContainer>

        <Footer>
          <FooterContainer>
            <Button onPress={() => {}} disabled={order.length === 0}>
              Finalizar
            </Button>
          </FooterContainer>
        </Footer>
      </Container>
    </>
  );
};

export default Order;
