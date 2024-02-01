import Realm from "realm";

export interface TipoPedido {
  Filial?: any | null;
  Tabela?: any | null;
  Descricao?: string | null;
  AcaoRepetirItem?: number | null;
  ReservaEstoque?: boolean | null;
  HandleFilialPedido?: number | null;
  UtilizaPrecoPessoa?: boolean | null;
  HandleTabela?: number | null;
  Tabelas?: any[]; // Não é utilizado
  Handle: number;
  HandleFilial?: number | null;
  HandleTrade?: number | null;
  Plataforma?: number | null;
}

export type TipoPedidoObject = TipoPedido & Realm.Object;
