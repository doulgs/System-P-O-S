import { Alert } from "react-native";
import api from "../../infra/services/api";
import { Item } from "../../database/interfaces/Interface-Item";
import { getRealm } from "../../infra/realm";
import { obterToken } from "../obterToken";
import { Filial } from "../../database/interfaces/Interface-Filial";
import { Pedido } from "../../database/interfaces/Interface-Pedido";

async function criarPedidoObjeto(
  itemsDoPedido: Item[],
  totalPedido: number,
  HandleCondicaoPagamento: number,
  NOMECLIENTE: string
): Promise<Pedido> {
  return {
    Handle: 1,
    HandleCondicao: HandleCondicaoPagamento,
    Data: new Date(),
    CliNome: NOMECLIENTE,
    CliCnpjCpf: "99999999999",
    CliFone: "99999999999",
    TotalItens: totalPedido,
    TotalDesconto: 0,
    Total: totalPedido,
    Itens: itemsDoPedido.map((item, index) => ({
      Sequencia: index + 1,
      HandleItem: item.Handle,
      ItemDescricao: item.Descricao,
      ItemQuant: item.Amount,
      ItemFator: 0,
      ItemValor: item.VendaValor ?? 0,
      ItemSubtotal: (item.VendaValor ?? 0) * item.Amount,
      ItemDesconto: 0,
      ItemValorAcrescimo: 0,
      ItemTotal: (item.VendaValor ?? 0) * item.Amount,
      Observacao: item.Observacao,
      Excecoes: item.Excecoes.filter((excecao) => excecao.Amount >= 1).map(
        (excecao) => ({
          HandleGrupo2Excecao: excecao.Handle,
          Quantidade: excecao.Amount,
          Valor: excecao.Valor,
          Total: (excecao.Valor ?? 0) * excecao.Amount,
        })
      ),
    })),
  };
}

async function enviarPedidoParaAPI(
  pedido: Pedido,
  nomeDoSite: string | null | undefined,
  token: string
): Promise<void> {
  const pedidoJSON = JSON.stringify(pedido);
  try {
    const { data } = await api.post(
      "/pbl/Pedido/Insert",
      { siteName: nomeDoSite, Entity: pedidoJSON },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const { IsValid, Message, Data } = data;
    console.log(IsValid, Message, Data);
  } catch (error) {
    throw new Error("Erro ao enviar os dados para a API");
  }
}

async function salvarPedidoNoRealm(pedido: Pedido): Promise<void> {
  try {
    const realm = await getRealm();
    realm.write(() => {
      realm.create(`SchemaPedido`, pedido);
      console.log(`Sync realizado com sucesso SchemaPedido`);
    });
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao salvar o pedido no Realm");
  }
}

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

    await enviarPedidoParaAPI(pedido, nomeDoSite, token);
    await salvarPedidoNoRealm(pedido);
  } catch (error) {
    Alert.alert("Erro", "Houve um erro ao processar os dados.");
    console.error("Erro ao processar os dados:", error);
  }
}

export { RegistrarPedido };
