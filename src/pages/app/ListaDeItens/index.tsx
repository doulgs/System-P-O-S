import { useFocusEffect, useRoute } from "@react-navigation/native";
import { Separator } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { getRealm } from "../../../infra/realm";
import { Item } from "../../../database/interfaces/Interface-Item";
import { IteTabFor } from "../../../database/interfaces/Interface-IteTabFor";
import { Loading } from "../../../components/Loading";
import { FlashList } from "@shopify/flash-list";
import { ItemLayout } from "../../../components/ItemLayout";
import { Grupo2Excecao } from "../../../database/interfaces/Interface-Grupo2Excecao";
import { ItemExcecaoAuto } from "../../../database/interfaces/Interface-ItemExcecaoAuto";

type ScreenProps = {
  handle: number;
};

const ListaDeItens = () => {
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

  return (
    <FlashList
      data={itens}
      keyExtractor={(item) => String(item.Handle)}
      renderItem={({ item }) => <ItemLayout data={item} />}
      contentContainerStyle={{ padding: 24 }}
      ItemSeparatorComponent={() => <Separator />}
      estimatedItemSize={200}
      //TODO: Implementar a função de busca de itens
    />
  );
};

export default ListaDeItens;
