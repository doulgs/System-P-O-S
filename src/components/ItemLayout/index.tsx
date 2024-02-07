import { useState } from "react";
import {
  Item,
  Item as ItemProps,
} from "../../database/interfaces/Interface-Item";
import { formatarParaMoeda } from "../../helpers/utils/formatarParaMoeda";
import { Text } from "../Text";
import {
  Acao,
  ActionContentAmount,
  AddToCartButton,
  ButtonActionAdd,
  ButtonActionRemove,
  Image,
  Product,
  ProductDetails,
} from "./styles";
import { useCart } from "../../context/cartContext";

interface Props {
  data: ItemProps;
  index: number;
}

export function ItemLayout({ data: item, index }: Props) {
  const {
    AddItemCart,
    AddQuantidadeItem,
    RetirarItemCart,
    RetirarQuantidadeItem,
  } = useCart();
  const imageAPI = item?.FotoByte || null;
  const source = imageAPI
    ? { uri: `data:image/jpeg;base64,${imageAPI}` }
    : require("../../assets/images/NoImage.jpg");

  const [amount, setAmount] = useState(0);

  function AddQuantidade(item: Item) {
    if (amount === 0) {
      AddItemCart(item);
      setAmount(amount + 1);
      return;
    }
    setAmount(amount + 1);
    AddQuantidadeItem(index);
  }

  function RemoveQuantidade(index: number) {
    if (amount === 0) {
      RetirarItemCart(index);
      return;
    }
    setAmount(amount - 1);
    RetirarQuantidadeItem(index);
  }

  return (
    <>
      <Product>
        <Image source={source} />

        <ProductDetails>
          <Text
            weight="600"
            style={{ textTransform: "uppercase" }}
            numberOfLines={1}
          >
            {item.Descricao}
          </Text>
          <Text
            color="#666"
            style={{ textTransform: "lowercase" }}
            numberOfLines={2}
          ></Text>
          <Text weight="600" size={14}>
            {formatarParaMoeda(item?.VendaValor ?? 0)}
          </Text>
        </ProductDetails>

        <AddToCartButton>
          <Acao>
            <ButtonActionAdd onPress={() => RemoveQuantidade(index)}>
              <Text color="#fff" weight="600">
                -
              </Text>
            </ButtonActionAdd>
            <ActionContentAmount>
              <Text weight="700">{amount ?? 0}</Text>
            </ActionContentAmount>
            <ButtonActionRemove onPress={() => AddQuantidade(item)}>
              <Text color="#fff" weight="600">
                +
              </Text>
            </ButtonActionRemove>
          </Acao>
        </AddToCartButton>
      </Product>
    </>
  );
}
