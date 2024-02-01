import Realm from "realm";

export interface Unidade {
  Sigla?: string | null;
  Descricao?: string | null;
  Tabelas?: any[]; // Não é utilizado
  Handle: number;
  HandleFilial?: number | null;
  HandleTrade?: number | null;
  Plataforma?: number | null;
}

export type UnidadeObject = Unidade & Realm.Object;
