import { ObjectSchema } from "realm";

export const SchemaPedido: ObjectSchema = {
  name: "SchemaPedido",
  primaryKey: "Handle",

  properties: {
    Handle: "int",
    HandleCondicao: { type: "int", optional: true },
    Data: { type: "date", optional: true },
    CliNome: { type: "string", optional: true },
    CliCnpjCpf: { type: "string", optional: true },
    CliFone: { type: "string", optional: true },
    TotalItens: { type: "double", optional: true },
    TotalDesconto: { type: "double", optional: true },
    Total: { type: "double", optional: true },
    Itens: {
      type: "list",
      objectType: "SchemaPedidoItem",
    },
    StatusPagamento: { type: "string", optional: true },
  },
};
