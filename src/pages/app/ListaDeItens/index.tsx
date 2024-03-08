import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useCart } from "../../../context/cartContext";
import { FlashList } from "@shopify/flash-list";
import { getRealm } from "../../../infra/realm";

import { Item } from "../../../database/interfaces/Interface-Item";
import { IteTabFor } from "../../../database/interfaces/Interface-IteTabFor";
import { Grupo2Excecao } from "../../../database/interfaces/Interface-Grupo2Excecao";

import { Loading } from "../../../components/Loading";
import { ItemLayout } from "../../../components/ItemLayout";
import { Container, Separator } from "./styles";

type ScreenProps = {
  handle: number;
};

const ListaDeItens = () => {
  const { handle } = useRoute().params as ScreenProps;
  const {
    cart,
    Adicionar,
    AdicionarQuantidade,
    RemoverQuantidade,
    LimparCarrinho,
  } = useCart();

  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const recuperarItens = async () => {
        setLoading(true);
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

              if (obterIteTabFor[0]?.Preco !== null) {
                MyItem.VendaValor = obterIteTabFor[0]?.Preco;
              }

              const execoesDoItem = realm
                .objects<Grupo2Excecao>("SchemaGrupo2Excecao")
                .filtered(
                  `HandleItem = '${MyItem.Handle}' OR HandleGrupo2 = '${MyItem.HandleGrupo2}'`
                );

              MyItem.Excecoes = Array.from(execoesDoItem);
            });
          });

          Adicionar(Array.from(result));
          setLoading(false);
        } catch (error) {
          console.error("Erro ao realizar a consulta dos Itens:", error);
          setLoading(false);
        }
      };
      recuperarItens();
      LimparCarrinho();
    }, [handle])
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <FlashList
      data={cart}
      keyExtractor={(item, index) => String(item.Handle)}
      renderItem={({ item, index }) => (
        <ItemLayout
          data={item}
          adicionarQuantidade={() => AdicionarQuantidade(index)}
          removerQuantidade={() => RemoverQuantidade(index)}
        />
      )}
      estimatedItemSize={153}
      ItemSeparatorComponent={() => <Separator />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ListaDeItens;
