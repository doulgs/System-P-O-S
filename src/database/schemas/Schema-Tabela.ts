import { ObjectSchema } from "realm";

export const SchemaTabela: ObjectSchema = {
  name: "SchemaTabela",
  primaryKey: "Handle",
  properties: {
    Formula: { type: "object", objectType: "SchemaFormula", optional: true },
    Descricao: { type: "string", optional: true },
    Preco1: { type: "string", optional: true },
    Preco2: { type: "string", optional: true },
    Preco3: { type: "string", optional: true },
    HandleFormula: { type: "int", optional: true },
    Tabelas: { type: "string", optional: true }, //Não é utilizado
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },
};
