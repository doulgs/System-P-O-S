import Realm from "realm";
import { PedidoExcecoesItem } from "./Interface-PedidoItemExcecao";

export interface PedidoItem {
  HandlePedido?: number;
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
  Excecoes?: PedidoExcecoesItem[];
}

export type PedidoItemObject = PedidoItem & Realm.Object;
