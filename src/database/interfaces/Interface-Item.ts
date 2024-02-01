import Realm from "realm";
import { Filial } from "./Interface-Filial";
import { Grupo1 } from "./Interface-Grupo1";
import { Grupo2 } from "./Interface-Grupo2";
import { Grupo3 } from "./Interface-Grupo3";
import { Unidade } from "./Interface-Unidade";

export interface Item {
  Filial?: Filial | null;
  Grupo1?: Grupo1 | null;
  Grupo2?: Grupo2 | null;
  Grupo3?: Grupo3 | null;
  Unidade?: Unidade | null;
  HandleGrupo1?: number;
  HandleGrupo2?: number;
  HandleGrupo3?: number;
  HandleUnidade?: number;
  ClassificacaoMarketPlace?: string;
  Codigo?: string;
  Descricao?: string;
  Complemento?: string;
  DescReduzida?: string;
  Foto?: string | null; // Se a Foto for uma URL ou caminho do arquivo, ajuste o tipo conforme necessário
  PrecoValor?: number;
  Composicao?: boolean;
  DescLonga?: string;
  ComposicaoBarra?: string;
  NaoPermiteDesconto?: boolean;
  DescricaoDif?: string;
  VendaValor?: number;
  ValorPromocional?: number;
  VendaFrete?: number;
  CustoValor?: number;
  Observacao?: string;
  Quantidade?: number;
  FotoByte?: string | null; // Se FotoByte for uma sequência de bytes, ajuste o tipo conforme necessário
  Mark?: boolean;
  Tabelas?: any; // Não é utilizado
  Handle: number;
  HandleFilial?: number;
  HandleTrade?: number;
  Plataforma?: number;
}

export type ItemObject = Item & Realm.Object;
