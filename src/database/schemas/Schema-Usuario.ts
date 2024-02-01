import { ObjectSchema } from "realm";

export const SchemaUsuario: ObjectSchema = {
  name: "SchemaUsuario",
  primaryKey: "Handle",
  properties: {
    Filial: { type: "object", objectType: "SchemaFilial", optional: true },
    TipoPedido: {
      type: "object",
      objectType: "SchemaTipoPedido",
      optional: true,
    },
    Login: { type: "string", optional: true },
    Senha: { type: "string", optional: true },
    Nome: { type: "string", optional: true },
    Role: { type: "string", optional: true },
    Solucao: { type: "string", optional: true },
    Vendedor_SowPublisoft: { type: "int", optional: true },
    HandleFilialTrade: { type: "int", optional: true },
    PermiteVisualizarUltimoCusto: { type: "int", optional: true },
    VisualizarTodasPessoasSowPublisoft: { type: "int", optional: true },
    HandleTipoPedido: { type: "int", optional: true },
    Tabelas: { type: "string", optional: true }, //Não é utilizado //Não é utilizado
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },
};
