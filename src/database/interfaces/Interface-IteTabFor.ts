import Realm from "realm";

export interface IteTabFor {
  Handle: number;
  HandleItem: number;
  HandleTabela: number;
  HandleFormula?: number | null;
  HandleFilial: number;
  Preco?: number | null;
}

export type IteTabForObject = IteTabFor & Realm.Object;
