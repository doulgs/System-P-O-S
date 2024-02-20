import Realm from "realm";

interface PedidoExcecoesItem {
  HandleGrupo2Excecao?: number;
  Quantidade: number;
  Valor?: number;
  Total: number;
}

interface PedidoItems {
  Sequencia: number;
  HandleItem: number;
  ItemDescricao?: string;
  ItemQuant: number;
  ItemFator: number;
  ItemValor: number;
  ItemSubtotal: number;
  ItemDesconto: number;
  ItemValorAcrescimo: number;
  ItemTotal: number;
  Observacao?: string;
  Excecoes: PedidoExcecoesItem[];
}

interface Pedido {
  Handle?: number;
  HandleCondicao?: number;
  Data: Date;
  CliNome: string;
  CliCnpjCpf: string;
  CliFone: string;
  TotalItens: number;
  TotalDesconto: number;
  Total: number;
  Itens: PedidoItems[];
}

type PedidoObject = Pedido & Realm.Object;

export { PedidoObject, Pedido, PedidoItems, PedidoExcecoesItem };
