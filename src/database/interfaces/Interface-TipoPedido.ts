import Realm from "realm";
import { Filial } from "./Interface-Filial";
import { Tabela } from "./Interface-Tabela";

export interface TipoPedido {
  Filial?: Filial | null;
  Tabela?: Tabela | null;
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
