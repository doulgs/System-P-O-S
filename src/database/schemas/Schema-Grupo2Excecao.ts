import { ObjectSchema } from "realm";

export const SchemaGrupo2Excecao: ObjectSchema = {
  name: "SchemaGrupo2Excecao",
  primaryKey: "Handle",
  properties: {
    Grupo2: { type: "object", objectType: "SchemaGrupo2", optional: true },
    GrupoExcecao: {
      type: "object",
      objectType: "SchemaGrupoExcecao",
      optional: true,
    },
    Item: { type: "object", objectType: "SchemaItem", optional: true },
    HandleGrupo2: { type: "int", optional: true },
    HandleItem: { type: "int", optional: true },
    HandleGrupoExcecao: { type: "int", optional: true },
    Excecao: { type: "string", optional: true },
    Valor: { type: "double", optional: true },
    Ativa: { type: "bool", optional: true },
    Ordem: { type: "string", optional: true },
    IteHandle: { type: "int", optional: true },
    IteQuantidade: { type: "double", optional: true },
    IteTipoValor: { type: "string", optional: true },
    IteValorInformado: { type: "double", optional: true },
    Quantidade: { type: "double", optional: true },
    Mark: { type: "bool", optional: true },
    Tabelas: { type: "object", objectType: "Tabela", optional: true }, //Não é utilizado
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },
};
