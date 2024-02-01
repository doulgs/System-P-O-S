import { ObjectSchema } from "realm";

export const SchemaTipoPedido: ObjectSchema = {
  name: "SchemaTipoPedido",
  primaryKey: "Handle",
  properties: {
    Filial: { type: "object", objectType: "SchemaFilial", optional: true },
    Tabela: { type: "object", objectType: "SchemaUnidade", optional: true },
    Descricao: { type: "string", optional: true },
    AcaoRepetirItem: { type: "int", optional: true },
    ReservaEstoque: { type: "bool", optional: true },
    HandleFilialPedido: { type: "int", optional: true },
    UtilizaPrecoPessoa: { type: "bool", optional: true },
    HandleTabela: { type: "int", optional: true },
    Tabelas: { type: "object", objectType: "Tabela", optional: true }, //Não é utilizado
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },
};
