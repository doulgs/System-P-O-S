import Realm from "realm";
import { Grupo2 } from "./Interface-Grupo2";
import { GrupoExcecao } from "./Interface-GrupoExcecao";
import { Item } from "./Interface-Item";

export interface Grupo2Excecao {
  Grupo2?: Grupo2 | null;
  GrupoExcecao?: GrupoExcecao | null;
  Item?: Item | null;
  HandleGrupo2?: number;
  HandleItem?: number;
  HandleGrupoExcecao?: number;
  Excecao?: string;
  Valor?: number;
  Ativa?: boolean;
  Ordem?: string;
  IteHandle?: number;
  IteQuantidade?: number;
  IteTipoValor?: string;
  IteValorInformado?: number;
  Quantidade?: number;
  Mark?: boolean;
  Tabelas?: any; // Não é utilizado
  Handle: number;
  HandleFilial?: number;
  HandleTrade?: number;
  Plataforma?: number;
  Amount: number; //Utilizada para controle do Item
}

export type Grupo2ExcecaoObject = Grupo2Excecao & Realm.Object;
