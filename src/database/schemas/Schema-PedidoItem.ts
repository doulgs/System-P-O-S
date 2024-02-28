import { ObjectSchema } from "realm";

export const SchemaPedidoItem: ObjectSchema = {
  name: "SchemaPedidoItem",

  properties: {
    //HandlePedido: "int",
    Sequencia: "int",
    HandleItem: { type: "int", optional: true },
    ItemDescricao: { type: "string", optional: true },
    ItemQuant: { type: "double", optional: true },
    ItemFator: { type: "double", optional: true },
    ItemValor: { type: "double", optional: true },
    ItemSubtotal: { type: "double", optional: true },
    ItemDesconto: { type: "double", optional: true },
    ItemValorAcrescimo: { type: "double", optional: true },
    ItemTotal: { type: "double", optional: true },
    Observacao: { type: "string", optional: true },
    Excecoes: { type: "list", objectType: "SchemaPedidoItemExcecao" },
  },
};
