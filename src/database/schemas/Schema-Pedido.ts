import { ObjectSchema } from "realm";

export const SchemaPedido: ObjectSchema = {
  name: "SchemaPedido",
  primaryKey: "Handle",

  properties: {
    Handle: "int",
    HandleCondicao: { type: "int", optional: true },
    Data: { type: "int", optional: true },
    CliNome: { type: "string", optional: true },
    CliCnpjCpf: { type: "string", optional: true },
    CliFone: { type: "string", optional: true },
    TotalItens: { type: "int", optional: true },
    TotalDesconto: { type: "int", optional: true },
    Total: { type: "int", optional: true },
    Itens: {
      type: "list",
      objectType: "SchemaItem",
    },
    StatusPagamento: { type: "string", optional: true },
  },
};
