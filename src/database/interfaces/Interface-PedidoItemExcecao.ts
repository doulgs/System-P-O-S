import Realm from "realm";

export interface PedidoExcecoesItem {
  HandleGrupo2Excecao?: number;
  Quantidade: number;
  Valor?: number;
  Total: number;
}

export type PedidoExcecoesItemObject = PedidoExcecoesItem & Realm.Object;
