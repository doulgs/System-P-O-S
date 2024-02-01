import Realm from "realm";

export interface Grupo1 {
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

export type Grupo1Object = Grupo1 & Realm.Object;
