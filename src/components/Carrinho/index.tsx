import { FlatList } from "react-native";
import { useCart } from "../../context/cartContext";
import { useNavigation } from "@react-navigation/native";
import { formatarParaMoeda } from "../../helpers/utils/formatarParaMoeda";
import { Text } from "../Text";
import { Button } from "../Button";
import {
  Acao,
  ButtonAction,
  Container,
  ContainerProduto,
  ContainerTotal,
  DetalhesProduto,
  Imagem,
  QuantidadeContainer,
  Resumo,
} from "./styles";

export function Carrinho() {
  const {
    cart,
    cartTotal,
    RetirarItemCart,
    AddQuantidadeItem,
    RetirarQuantidadeItem,
  } = useCart();

  const navigation = useNavigation();

  return (
    <>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 20, maxHeight: 150 }}
        renderItem={({ item, index }) => {
          const imageAPI = item?.FotoByte || null;
          const source = imageAPI
            ? { uri: `data:image/jpeg;base64,${imageAPI}` }
            : require("../../assets/images/NoImage.jpg");

          function AdicionarQuantidadeItemExistente() {
            AddQuantidadeItem(index);
          }
          function RetirarQuantidadeItemExistente() {
            if (item.Amount === 1) {
              RetirarItemCart();
              return;
            }
            RetirarQuantidadeItem(index);
          }

          return (
            <Container>
              <ContainerProduto>
                <Imagem source={source} />

                <QuantidadeContainer>
                  <Text>{item.Amount}x</Text>
                </QuantidadeContainer>

                <DetalhesProduto>
                  <Text size={14} weight="600">
                    {item.Descricao}
                  </Text>
                  <Text size={14} color="#666" style={{ marginTop: 4 }}>
                    {formatarParaMoeda(item?.VendaValor ?? 0)}
                  </Text>
                </DetalhesProduto>
              </ContainerProduto>
              <Acao>
                <ButtonAction
                  onPress={() => AdicionarQuantidadeItemExistente()}
                >
                  <Text color="#fff" weight="600">
                    +
                  </Text>
                </ButtonAction>
                <ButtonAction onPress={() => RetirarQuantidadeItemExistente()}>
                  <Text color="#fff" weight="600">
                    -
                  </Text>
                </ButtonAction>
              </Acao>
            </Container>
          );
        }}
      />

      <Resumo>
        <ContainerTotal>
          <Text size={14} color="#666">
            Total
          </Text>
          <Text weight="600" size={20}>
            {formatarParaMoeda(cartTotal)}
          </Text>
        </ContainerTotal>
        <Button
          onPress={() => navigation.navigate("Cart")}
          disabled={cart.length === 0}
        >
          <Text weight="600" color="#fff">
            Revisar Pedido
          </Text>
        </Button>
      </Resumo>
    </>
  );
}
