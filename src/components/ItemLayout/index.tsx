import React, { useCallback, useState } from "react";
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
import { useFocusEffect } from "@react-navigation/native";

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

  useFocusEffect(
    useCallback(() => {
      setAmount(0);
      //LimparCarrinho();
    }, [])
  );

  function AddQuantidade(item: Item) {
    setAmount((prevAmount) => {
      const newAmount = prevAmount + 1;
      if (newAmount === 1) {
        AddItemCart(item);
      } else {
        AddQuantidadeItem(index);
      }
      return newAmount;
    });
  }

  function RemoveQuantidade(index: number) {
    setAmount((prevAmount) => {
      const newAmount = Math.max(prevAmount - 1, 0);

      if (newAmount === 0) {
        RetirarItemCart(index);
      } else {
        RetirarQuantidadeItem(index);
      }

      return newAmount;
    });
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
            <ButtonActionAdd onPressIn={() => RemoveQuantidade(index)}>
              <Text color="#fff" weight="600">
                -
              </Text>
            </ButtonActionAdd>
            <ActionContentAmount>
              <Text weight="700">{amount}</Text>
            </ActionContentAmount>
            <ButtonActionRemove onPressIn={() => AddQuantidade(item)}>
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
