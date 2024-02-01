import { ObjectSchema } from "realm";

export const SchemaUnidade: ObjectSchema = {
  name: "SchemaUnidade",
  primaryKey: "Handle",

  properties: {
    Sigla: { type: "string", optional: true },
    Descricao: { type: "string", optional: true },
    Tabelas: { type: "list", objectType: "Tabela", optional: true }, //Não é utilizado
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },
};
