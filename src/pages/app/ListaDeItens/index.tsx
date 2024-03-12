import React, { useCallback, useState, useMemo } from "react";
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

// Envolvendo ItemLayout com React.memo para otimizar renderizações
const MemoizedItemLayout = React.memo(ItemLayout);

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

          // Otimizando a consulta ao banco de dados
          const iteTabForHandles = result.map((item) => item.Handle);
          const iteTabForResults = realm
            .objects<IteTabFor>("SchemaIteTabFor")
            .filtered(`HandleItem IN $0`, iteTabForHandles);

          const excecoesHandles = result.map((item) => item.Handle);
          const excecoesGrupo2Handles = result.map((item) => item.HandleGrupo2);
          const excecoesResults = realm
            .objects<Grupo2Excecao>("SchemaGrupo2Excecao")
            .filtered(
              `HandleItem IN $0 OR HandleGrupo2 IN $1`,
              excecoesHandles,
              excecoesGrupo2Handles
            );

          realm.write(() => {
            result.forEach((MyItem: Item) => {
              const obterIteTabFor = iteTabForResults.filtered(
                `HandleItem = '${MyItem.Handle}'`
              );
              if (obterIteTabFor[0]?.Preco !== null) {
                MyItem.VendaValor = obterIteTabFor[0]?.Preco;
              }

              const execoesDoItem = excecoesResults.filtered(
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
        <MemoizedItemLayout
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
