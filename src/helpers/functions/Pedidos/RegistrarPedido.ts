import { getRealm } from "../../../infra/realm";
import { obterToken } from "../../obterToken";

import { Filial } from "../../../database/interfaces/Interface-Filial";
import { Item } from "../../../database/interfaces/Interface-Item";

import { criarPedidoObjeto } from "./criarPedidoObjeto";
import { enviarPedidoParaAPI } from "./enviarPedidoParaAPI";
import { salvarPedidoNoRealm } from "./salvarPedidoNoRealm";

import { Alert } from "react-native";

async function RegistrarPedido(
  itemsDoPedido: Item[],
  totalPedido: number,
  HandleCondicaoPagamento: number,
  NOMECLIENTE: string
) {
  try {
    const realm = await getRealm();
    const token = await obterToken();
    const filial = realm.objects<Filial>("SchemaFilial");
    const nomeDoSite = filial.length > 0 ? filial[0].NomeSite : null;

    const pedido = await criarPedidoObjeto(
      itemsDoPedido,
      totalPedido,
      HandleCondicaoPagamento,
      NOMECLIENTE
    );

    const { IsValid, Message, Data } = await enviarPedidoParaAPI(
      pedido,
      nomeDoSite,
      token
    );

    if (IsValid) {
      const handlePedidoWeb = Data;
      await salvarPedidoNoRealm(pedido, handlePedidoWeb);
      Alert.alert(`Sucesso", "Pedido ${handlePedidoWeb} Salvo no Servidor.`);
    } else {
      Alert.alert("Erro", "Houve um erro ao postar os dados no Servidor.");
    }
  } catch (error) {
    Alert.alert("Erro", "Houve um erro ao processar os dados.");
    console.error("Erro ao processar os dados:", error);
  }
}

export { RegistrarPedido };
