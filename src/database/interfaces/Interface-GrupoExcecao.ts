import Realm from "realm";

export interface GrupoExcecao {
  Codigo?: string;
  Nome?: string;
  Reduzido?: string;
  Tabelas?: any; // Não é utilizado
  Handle: number;
  HandleWeb?: number;
  HandleFilial?: number;
  HandleTrade?: number;
  Plataforma?: number;
}

export type GrupoExcecaoObject = GrupoExcecao & Realm.Object;
