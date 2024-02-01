import Realm from "realm";

export interface Item {
  Filial?: any | null;
  Grupo1?: any | null;
  Grupo2?: any | null;
  Grupo3?: any | null;
  Unidade?: any | null;
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
