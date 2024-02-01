import Realm from "realm";
import { Formula } from "./Interface-Formula";

export interface Tabela {
  Formula?: Formula | null;
  Descricao?: string | null;
  Preco1?: string | null;
  Preco2?: string | null;
  Preco3?: string | null;
  HandleFormula?: number | null;
  Tabelas?: any | null; // Não é utilizado
  Handle: number;
  HandleFilial?: number | null;
  HandleTrade?: number | null;
  Plataforma?: number | null;
}

export type TabelaObject = Tabela & Realm.Object;
