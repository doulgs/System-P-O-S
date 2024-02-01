import { ObjectSchema } from "realm";

export const SchemaGrupo3: ObjectSchema = {
  name: "SchemaGrupo3",
  primaryKey: "Handle",
  properties: {
    Codigo: { type: "string", optional: true },
    Nome: { type: "string", optional: true },
    Nome2: { type: "string", optional: true },
    Reduzido: { type: "string", optional: true },
    Inativo: { type: "bool", optional: true },
    QuantidadeItensComposicao: { type: "int", optional: true },
    Tabelas: { type: "string", optional: true }, //Não é utilizado
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },
};
