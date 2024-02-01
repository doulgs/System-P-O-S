import { ObjectSchema } from "realm";

export const SchemaGrupo1: ObjectSchema = {
  name: "SchemaGrupo1",
  primaryKey: "Handle",
  properties: {
    Codigo: { type: "string", optional: true },
    Nome: { type: "string", optional: true },
    Reduzido: { type: "string", optional: true },
    Tabelas: { type: "object", objectType: "Tabela", optional: true }, //Não é utilizado
    Handle: "int",
    HandleWeb: { type: "int", optional: true },
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },
};
