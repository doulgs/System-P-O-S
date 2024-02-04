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

interface Props {
  data: ItemProps;
}

export const ItemLayout: React.FC<Props> = ({ data }) => {
  const { AddItemCart } = useCart();

  const imageAPI = data?.FotoByte || null;
  const source = imageAPI
    ? { uri: `data:image/jpeg;base64,${imageAPI}` }
    : require("../../assets/images/NoImage.jpg");

  const handleAddItemToCart = async (item: ItemProps) => {
    await AddItemCart(item);
  };
  return (
    <Product onPress={() => handleAddItemToCart(data)}>
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
        <AddToCartButtonStyle>
          <Text weight="600">+</Text>
        </AddToCartButtonStyle>
      </AddToCartButton>
    </Product>
  );
};
