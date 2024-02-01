import { ObjectSchema } from "realm";

export const ItemExcecaoAuto: ObjectSchema = {
  name: "ItemExcecaoAuto",
  primaryKey: "Handle",
  properties: {
    Grupo2Excecao: {
      type: "object",
      objectType: "SchemaGrupo2Excecao",
      optional: true,
    },
    Item: { type: "object", objectType: "SchemaItem", optional: true },
    HandleItem: { type: "int", optional: true },
    HandleExcecao: { type: "int", optional: true },
    Quantidade: { type: "double", optional: true },
    Tabelas: { type: "string", optional: true }, //Não é utilizado
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },
};
