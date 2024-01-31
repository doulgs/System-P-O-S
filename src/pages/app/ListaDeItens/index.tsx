import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native";

import {
  AddToCartButton,
  AddToCartButtonStyle,
  Image,
  Product,
  ProductDetails,
  Separator,
} from "./styles";
import { formatarParaMoeda } from "../../../helpers/utils/formatarParaMoeda";
import { IntItem, Item } from "../../../mocks/Item";
import { Text } from "../../../components/Text";

type ScreenProps = {
  handle: number;
};

const ListaDeItens = () => {
  const { handle } = useRoute().params as ScreenProps;
  const renderizarProduto = ({ item: product }: { item: IntItem }) => {
    const imageAPI = product?.FotoByte || null;
    const source = imageAPI
      ? { uri: `data:image/jpeg;base64,${imageAPI}` }
      : require("../../../assets/images/NoImage.jpg");
    return (
      <Product>
        <Image source={source} />

        <ProductDetails>
          <Text weight="600">{product.Descricao}</Text>
          <Text color="#666">{product.DescLonga}</Text>
          <Text weight="600" size={14}>
            {formatarParaMoeda(product.VendaValor)}
          </Text>
        </ProductDetails>

        <AddToCartButton>
          <AddToCartButtonStyle>
            <Text weight="600">+</Text>
          </AddToCartButtonStyle>
        </AddToCartButton>
      </Product>
    );
  };
  return (
    <FlatList
      data={Item}
      keyExtractor={(item) => String(item.Handle)}
      renderItem={renderizarProduto}
      contentContainerStyle={{ padding: 24 }}
      ItemSeparatorComponent={() => <Separator />}
    />
  );
};

export default ListaDeItens;
