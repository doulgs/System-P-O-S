import { ObjectSchema } from "realm";

export const SchemaIteTabFor: ObjectSchema = {
  name: "SchemaIteTabFor",
  primaryKey: "Handle",
  properties: {
    Handle: { type: "int", indexed: true },
    HandleItem: { type: "int", indexed: true },
    HandleTabela: { type: "int", indexed: true },
    HandleFormula: { type: "int", optional: true },
    HandleFilial: { type: "int", indexed: true },
    Preco: { type: "double", optional: true },
  },
};
