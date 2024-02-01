import { useNavigation, useRoute } from "@react-navigation/native";
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
import { useCart } from "../../../context/cartContext";

type ScreenProps = {
  handle: number;
};

const ListaDeItens = () => {
  const { AddItemCart } = useCart();
  const navigation = useNavigation();
  const { handle } = useRoute().params as ScreenProps;

  const handleAddItemToCart = (item: IntItem) => {
    AddItemCart(item);
  };

  const renderizarProduto = ({ item }: { item: IntItem }) => {
    const imageAPI = item?.FotoByte || null;
    const source = imageAPI
      ? { uri: `data:image/jpeg;base64,${imageAPI}` }
      : require("../../../assets/images/NoImage.jpg");
    return (
      <Product onPress={() => handleAddItemToCart(item)}>
        <Image source={source} />

        <ProductDetails>
          <Text
            weight="600"
            style={{ textTransform: "uppercase" }}
            numberOfLines={1}
          >
            {item.Descricao}
          </Text>
          <Text color="#666" numberOfLines={2}>
            {item.DescLonga}
          </Text>
          <Text weight="600" size={14}>
            {formatarParaMoeda(item.VendaValor)}
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
