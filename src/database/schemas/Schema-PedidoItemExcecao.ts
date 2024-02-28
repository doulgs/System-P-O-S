import { ObjectSchema } from "realm";

export const SchemaPedidoItemExcecao: ObjectSchema = {
  name: "SchemaPedidoItemExcecao",

  properties: {
    //HandlePedido: "int",
    HandleGrupo2Excecao: { type: "int", optional: true },
    Quantidade: { type: "double", optional: true },
    Valor: { type: "double", optional: true },
    Total: { type: "double", optional: true },
  },
};
