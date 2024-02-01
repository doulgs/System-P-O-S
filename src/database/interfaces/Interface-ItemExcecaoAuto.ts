import Realm from "realm";

export interface ItemExcecaoAuto {
  Grupo2Excecao?: any | null;
  Item?: any | null;
  HandleItem?: number;
  HandleExcecao?: number;
  Quantidade?: number;
  Tabelas?: any; // Não é utilizado
  Handle: number;
  HandleFilial?: number;
  HandleTrade?: number;
  Plataforma?: number;
}

export type ItemExcecaoAutoObject = ItemExcecaoAuto & Realm.Object;
