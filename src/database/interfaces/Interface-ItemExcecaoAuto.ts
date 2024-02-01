import Realm from "realm";
import { Grupo2Excecao } from "./Interface-Grupo2Excecao";
import { Item } from "./Interface-Item";

export interface ItemExcecaoAuto {
  Grupo2Excecao?: Grupo2Excecao | null;
  Item?: Item | null;
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
