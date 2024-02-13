import { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useCart } from "../../../context/cartContext";
import { FlashList } from "@shopify/flash-list";
import { getRealm } from "../../../infra/realm";

import { Item } from "../../../database/interfaces/Interface-Item";
import { IteTabFor } from "../../../database/interfaces/Interface-IteTabFor";
import { Grupo2Excecao } from "../../../database/interfaces/Interface-Grupo2Excecao";

import { Loading } from "../../../components/Loading";
import { ItemLayout } from "../../../components/ItemLayout";
import { Separator } from "./styles";

type ScreenProps = {
  handle: number;
};

const ListaDeItens = () => {
  const { handle } = useRoute().params as ScreenProps;
  const {
    AdicionarItem,
    RemoverItem,
    AdicionarQuantidade,
    RemoverQuantidade,
    LimparCarrinho,
  } = useCart();

  const [itens, setItens] = useState<Item[]>([]);
  const [buscarItens, setBuscarItens] = useState("");
  const [resultadosBusca, setResultadosBusca] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const recuperarItens = async () => {
        setLoading(true); // Set loading to true when refocusing
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

          setItens(Array.from(result));
          setLoading(false);
        } catch (error) {
          console.error("Erro ao realizar a consulta dos Itens:", error);
          setLoading(false);
        }
      };
      recuperarItens();
    }, [handle])
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

  useEffect(() => {
    LimparCarrinho(); // Move LimparCarrinho outside of useFocusEffect
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <FlashList
        data={itens}
        keyExtractor={(item) => String(item.Handle)}
        renderItem={({ item, index }) => (
          <ItemLayout
            data={item}
            adicionarItem={() => AdicionarItem(item)}
            removerItem={() => RemoverItem(index)}
            adicionarQuantidade={() => AdicionarQuantidade(index)}
            removerQuantidade={() => RemoverQuantidade(index)}
          />
        )}
        estimatedItemSize={200}
        contentContainerStyle={{ padding: 16 }}
        ItemSeparatorComponent={() => <Separator />}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default ListaDeItens;
