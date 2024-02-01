import Realm from "realm";

export interface Grupo2Excecao {
  Grupo2?: any | null;
  GrupoExcecao?: any | null;
  Item?: any | null;
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
}

export type Grupo2ExcecaoObject = Grupo2Excecao & Realm.Object;
