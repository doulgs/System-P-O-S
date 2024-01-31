import { FlatList } from "react-native";

import { products } from "../../mocks/products";
import { IntProduct } from "../../types/Product";
import { Text } from "../Text";
import React from "react";
import {
  AddToCartButton,
  AddToCartButtonStyle,
  Image,
  Product,
  ProductDetails,
  Separator,
} from "./styles";
import { PedidoModal } from "../Modal";
import { formatarParaMoeda } from "../../helpers/utils/formatarParaMoeda";

export const Menu = () => {
  const renderizarProduto = ({ item: product }: { item: IntProduct }) => {
    return (
      <Product>
        <Image source={{ uri: `${product.uri}` }} />

        <ProductDetails>
          <Text weight="600">{product.name}</Text>
          <Text color="#666">{product.description}</Text>
          <Text weight="600" size={14}>
            {formatarParaMoeda(product.price)}
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
      data={products}
      keyExtractor={(item) => item._id}
      renderItem={renderizarProduto}
      contentContainerStyle={{ padding: 24 }}
      ItemSeparatorComponent={() => <Separator />}
    />
  );
};
