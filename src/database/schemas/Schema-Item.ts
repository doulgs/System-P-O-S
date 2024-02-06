import { ObjectSchema } from "realm";

export const SchemaItem: ObjectSchema = {
  name: "SchemaItem",
  primaryKey: "Handle",
  properties: {
    Filial: { type: "object", objectType: "SchemaFilial", optional: true },
    Grupo1: { type: "object", objectType: "SchemaGrupo1", optional: true },
    Grupo2: { type: "object", objectType: "SchemaGrupo2", optional: true },
    Grupo3: { type: "object", objectType: "SchemaGrupo3", optional: true },
    Unidade: { type: "object", objectType: "SchemaUnidade", optional: true },
    HandleGrupo1: { type: "int", optional: true },
    HandleGrupo2: { type: "int", optional: true },
    HandleGrupo3: { type: "int", optional: true },
    HandleUnidade: { type: "int", optional: true },
    ClassificacaoMarketPlace: { type: "string", optional: true },
    Codigo: { type: "string", optional: true },
    Descricao: { type: "string", optional: true },
    Complemento: { type: "string", optional: true },
    DescReduzida: { type: "string", optional: true },
    Foto: { type: "string", optional: true }, // Se a Foto for uma URL ou caminho do arquivo, ajuste o tipo conforme necessário
    PrecoValor: { type: "double", optional: true },
    Composicao: { type: "bool", optional: true },
    DescLonga: { type: "string", optional: true },
    ComposicaoBarra: { type: "string", optional: true },
    NaoPermiteDesconto: { type: "bool", optional: true },
    DescricaoDif: { type: "string", optional: true },
    VendaValor: { type: "double", optional: true },
    ValorPromocional: { type: "double", optional: true },
    VendaFrete: { type: "double", optional: true },
    CustoValor: { type: "double", optional: true },
    Observacao: { type: "string", optional: true },
    Quantidade: { type: "double", optional: true },
    FotoByte: { type: "string", optional: true }, // Se FotoByte for uma sequência de bytes, ajuste o tipo conforme necessário
    Mark: { type: "bool", optional: true },
    Tabelas: { type: "string", optional: true }, //Não é utilizado
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
    Amount: { type: "int", optional: true }, //Utilizada para controle do Item fica em branco no sincronismo
    Total: { type: "double", optional: true }, //Utilizada para controle do Item fica em branco no sincronismo
    Excecoes: {
      type: "object",
      objectType: "SchemaGrupo2Excecao",
      optional: true,
    }, //Utilizada para controle do Item fica em branco no sincronismo
  },
};
