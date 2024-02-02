import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
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
import { Text } from "../../../components/Text";
import { useCart } from "../../../context/cartContext";
import { useCallback, useEffect, useState } from "react";
import { getRealm } from "../../../infra/realm";
import { Item } from "../../../database/interfaces/Interface-Item";
import { IteTabFor } from "../../../database/interfaces/Interface-IteTabFor";
import { Grupo2, Unidade } from "../../../Interface";
import { Loading } from "../../../components/Loading";
import { FlashList } from "@shopify/flash-list";

type ScreenProps = {
  handle: number;
};

const ListaDeItens = () => {
  const { AddItemCart } = useCart();
  const navigation = useNavigation();
  const { handle } = useRoute().params as ScreenProps;

  const [itens, setItens] = useState<Item[]>([]);
  const [buscarItens, setBuscarItens] = useState("");
  const [resultadosBusca, setResultadosBusca] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true); // Adiciona estado de carregamento

  useFocusEffect(
    useCallback(() => {
      const recuperarItens = async () => {
        const realm = await getRealm();
        try {
          const result = realm
            .objects<Item>("SchemaItem")
            .filtered(`HandleGrupo2 = '${handle}'`);

          realm.write(() => {
            result.forEach(async (MyItem: Item) => {
              const obterIteTabFor = realm
                .objects<IteTabFor>("SchemaIteTabFor")
                .filtered(`HandleItem = '${MyItem.Handle}'`);

              // Adicione as propriedades desejadas ao objeto 'obj' dentro da transação
              if (obterIteTabFor[0]?.Preco !== null) {
                MyItem.VendaValor = obterIteTabFor[0]?.Preco;
              }
            });
          });
          setItens(Array.from(result));
          setLoading(false);
        } catch (error) {
          console.error("Error fetching SchemaItem objects:", error);
          setLoading(false);
        }
      };

      recuperarItens();
    }, [])
  );

  useEffect(() => {
    realizarBusca();
  }, [buscarItens, itens]);

  const realizarBusca = () => {
    const resultados = itens.filter((item) =>
      item.Descricao?.toLowerCase().includes(buscarItens.toLowerCase())
    );
    setResultadosBusca(resultados);
  };

  if (loading) {
    return <Loading />;
  }

  const handleAddItemToCart = (item: Item) => {
    AddItemCart(item);
  };

  const renderizarProduto = ({ item }: { item: Item }) => {
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
            {formatarParaMoeda(item?.VendaValor ?? 0)}
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
    <FlashList
      data={itens}
      keyExtractor={(item) => String(item.Handle)}
      renderItem={renderizarProduto}
      contentContainerStyle={{ padding: 24 }}
      ItemSeparatorComponent={() => <Separator />}
      estimatedItemSize={200}
    />
  );
};

export default ListaDeItens;
