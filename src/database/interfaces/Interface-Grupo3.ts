import Realm from "realm";

export interface Grupo3 {
  Codigo?: string;
  Nome?: string;
  Nome2?: string;
  Reduzido?: string;
  Inativo?: boolean;
  QuantidadeItensComposicao?: number;
  Tabelas?: any; // Não é utilizado
  Handle: number;
  HandleFilial?: number;
  HandleTrade?: number;
  Plataforma?: number;
}

export type Grupo3Object = Grupo3 & Realm.Object;
