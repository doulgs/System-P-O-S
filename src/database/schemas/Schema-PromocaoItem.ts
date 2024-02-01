import { ObjectSchema } from "realm";

export const SchemaPromocaoItem: ObjectSchema = {
  name: "SchemaPromocaoItem",
  primaryKey: "Handle",

  properties: {
    Item: { type: "object", objectType: "SchemaItem", optional: true },
    HandleItem: { type: "int", optional: true },
    DataInicio: { type: "date", optional: true },
    DataFim: { type: "date", optional: true },
    HoraInicio: { type: "date", optional: true },
    HoraFim: { type: "date", optional: true },
    Segunda: { type: "bool", optional: true },
    Terca: { type: "bool", optional: true },
    Quarta: { type: "bool", optional: true },
    Quinta: { type: "bool", optional: true },
    Sexta: { type: "bool", optional: true },
    Sabado: { type: "bool", optional: true },
    Domingo: { type: "bool", optional: true },
    ValorPromocional: { type: "double", optional: true },
    PercentualDescontoFixo: { type: "double", optional: true },
    Tabelas: { type: "string", optional: true }, //Não é utilizado
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },
};
