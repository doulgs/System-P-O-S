import React, { useCallback, useState } from "react";
import { Item as ItemProps } from "../../database/interfaces/Interface-Item";
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

  const [amount, setAmount] = useState(0);

  // Limpar quantidade quando o componente é focado
  useFocusEffect(
    useCallback(() => {
      setAmount(0);
    }, [])
  );

  // Adicionar quantidade de itens
  const handleAddQuantidade = useCallback(() => {
    if (!item) return;
    if (amount === 0) {
      AddItemCart(item);
    } else {
      AddQuantidadeItem(index);
    }
    setAmount((prevAmount) => prevAmount + 1);
  }, [item, index, amount, AddItemCart, AddQuantidadeItem]);

  // Remover quantidade de itens
  const handleRemoveQuantidade = useCallback(() => {
    if (!item) return;
    if (amount === 0) {
      RetirarItemCart(item);
    } else {
      RetirarQuantidadeItem(index);
    }
    setAmount((prevAmount) => prevAmount - 1);
  }, [item, index, RetirarItemCart, RetirarQuantidadeItem]);

  return (
    <>
      <Product>
        <Image
          source={
            item?.FotoByte
              ? { uri: `data:image/jpeg;base64,${item.FotoByte}` }
              : require("../../assets/images/NoImage.jpg")
          }
        />
        <ProductDetails>
          <Text
            weight="600"
            style={{ textTransform: "uppercase" }}
            numberOfLines={1}
          >
            {item?.Descricao || "N/A"}
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
            <ButtonActionAdd onPressIn={handleRemoveQuantidade}>
              <Text color="#fff" weight="600">
                -
              </Text>
            </ButtonActionAdd>
            <ActionContentAmount>
              <Text weight="700">{amount}</Text>
            </ActionContentAmount>
            <ButtonActionRemove onPressIn={handleAddQuantidade}>
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
