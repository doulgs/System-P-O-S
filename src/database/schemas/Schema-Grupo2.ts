import { ObjectSchema } from "realm";

export const SchemaGrupo2: ObjectSchema = {
  name: "SchemaGrupo2",
  primaryKey: "Handle",
  properties: {
    Codigo: { type: "string", optional: true },
    Nome: { type: "string", optional: true },
    Reduzido: { type: "string", optional: true },
    Tipo: { type: "string", optional: true },
    Foto: { type: "string", optional: true },
    PossuiComposicao: { type: "bool", optional: true },
    PermiteItemSemValor: { type: "bool", optional: true },
    AbrirTelaExcecoes: { type: "bool", optional: true },
    PossuiCaracteristicaItem: { type: "bool", optional: true },
    FotoByte: { type: "string", optional: true },
    Tabelas: { type: "object", objectType: "Tabela", optional: true }, //Não é utilizado
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },
};
