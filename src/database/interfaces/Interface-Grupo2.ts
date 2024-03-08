import Realm from "realm";

export interface Grupo2 {
  Codigo?: string;
  Nome?: string;
  Reduzido?: string;
  Tipo?: string;
  Foto?: string;
  PossuiComposicao?: boolean;
  PermiteItemSemValor?: boolean;
  AbrirTelaExcecoes?: boolean;
  PossuiCaracteristicaItem?: boolean;
  FotoByte?: string;
  FotoBase64?: string;
  Tabelas?: any; // Não é utilizado
  Handle: number;
  HandleFilial?: number;
  HandleTrade?: number;
  Plataforma?: number;
}

export type Grupo2Object = Grupo2 & Realm.Object;
