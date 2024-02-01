import { ObjectSchema } from "realm";

export const SchemaTipoPedido: ObjectSchema = {
  name: "SchemaTipoPedido",
  primaryKey: "Handle",
  properties: {
    Tabela: { type: "object", objectType: "SchemaTabela", optional: true },
    Descricao: { type: "string", optional: true },
    AcaoRepetirItem: { type: "int", optional: true },
    ReservaEstoque: { type: "bool", optional: true },
    HandleFilialPedido: { type: "int", optional: true },
    UtilizaPrecoPessoa: { type: "bool", optional: true },
    HandleTabela: { type: "int", optional: true },
    Tabelas: { type: "string", optional: true }, //Não é utilizado
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },
};
