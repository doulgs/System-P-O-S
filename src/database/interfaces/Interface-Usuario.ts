import Realm from "realm";

export interface Usuario {
  Filial?: any | null;
  TipoPedido?: string | null;
  Login?: string | null;
  Senha?: string | null;
  Nome?: string | null;
  Role?: string | null;
  Solucao?: string | null;
  Vendedor_SowPublisoft?: number | null;
  HandleFilialTrade?: number | null;
  PermiteVisualizarUltimoCusto?: number | null;
  VisualizarTodasPessoasSowPublisoft?: number | null;
  HandleTipoPedido?: number | null;
  Tabelas?: any[]; // Não é utilizado
  Handle: number;
  HandleFilial?: number | null;
  HandleTrade?: number | null;
  Plataforma?: number | null;
}

export type UsuarioObject = Usuario & Realm.Object;
