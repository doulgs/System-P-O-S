import { Item } from "../../../database/interfaces/Interface-Item";
import { Pedido } from "../../../database/interfaces/Interface-Pedido";

async function criarPedidoObjeto(
  itemsDoPedido: Item[],
  totalPedido: number,
  HandleCondicaoPagamento: number,
  NOMECLIENTE: string
): Promise<Pedido> {
  return {
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

export { criarPedidoObjeto };
