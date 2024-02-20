import Realm from "realm";
import {
  SchemaFilial,
  SchemaFormula,
  SchemaGrupo1,
  SchemaGrupo2,
  SchemaGrupo2Excecao,
  SchemaGrupo3,
  SchemaGrupoExcecao,
  SchemaIteTabFor,
  SchemaPedido,
  SchemaItem,
  ItemExcecaoAuto,
  SchemaPromocaoItem,
  SchemaTabela,
  SchemaTipoPedido,
  SchemaUnidade,
  SchemaUsuario,
} from "../database/schemas";

export const getRealm = async () =>
  await Realm.open({
    path: "publipos",
    schema: [
      SchemaFilial,
      SchemaFormula,
      SchemaGrupo1,
      SchemaGrupo2,
      SchemaGrupo2Excecao,
      SchemaGrupo3,
      SchemaGrupoExcecao,
      SchemaIteTabFor,
      SchemaPedido,
      SchemaItem,
      ItemExcecaoAuto,
      SchemaPromocaoItem,
      SchemaTabela,
      SchemaTipoPedido,
      SchemaUnidade,
      SchemaUsuario,
    ],
  });
