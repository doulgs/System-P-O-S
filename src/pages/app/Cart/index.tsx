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
        </MenuContainer>

        <Footer>
          <FooterContainer>
            <Button onPress={() => {}} disabled>
              Finalizar
            </Button>
          </FooterContainer>
        </Footer>
      </Container>
    </>
  );
};

export default Cart;
