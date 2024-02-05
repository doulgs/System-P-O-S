import { useState } from "react";
import { useCart } from "../../context/cartContext";
import { Item as ItemProps } from "../../database/interfaces/Interface-Item";
import { formatarParaMoeda } from "../../helpers/utils/formatarParaMoeda";
import { Text } from "../Text";
import {
  AddToCartButton,
  AddToCartButtonStyle,
  Image,
  Product,
  ProductDetails,
} from "./styles";
import { ExcecoesModal } from "../Modal";

interface Props {
  data: ItemProps;
}

export const ItemLayout: React.FC<Props> = ({ data }) => {
  const { AddItemCart } = useCart();
  const [modalVisible, setModalVisible] = useState(false);

  const imageAPI = data?.FotoByte || null;
  const source = imageAPI
    ? { uri: `data:image/jpeg;base64,${imageAPI}` }
    : require("../../assets/images/NoImage.jpg");

  const adicionarItemCart = async (item: ItemProps) => {
    setModalVisible(true);
    await AddItemCart(item);
  };

  const adicionarDiretoItemCart = async (item: ItemProps) => {
    await AddItemCart(item);
  };

  return (
    <>
      <Product onPress={() => adicionarItemCart(data)}>
        <Image source={source} />

        <ProductDetails>
          <Text
            weight="600"
            style={{ textTransform: "uppercase" }}
            numberOfLines={1}
          >
            {data.Descricao}
          </Text>
          <Text color="#666" numberOfLines={2}>
            {data.DescLonga}
          </Text>
          <Text weight="600" size={14}>
            {formatarParaMoeda(data?.VendaValor ?? 0)}
          </Text>
        </ProductDetails>

        <AddToCartButton>
          <AddToCartButtonStyle onPress={() => adicionarDiretoItemCart(data)}>
            <Text weight="600">+</Text>
          </AddToCartButtonStyle>
        </AddToCartButton>
      </Product>

      <ExcecoesModal
        visible={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
      />
    </>
  );
};
