import { getRealm } from "../realm";

async function deletarTabelas() {
  const realm = await getRealm();
  try {
    realm.write(() => {
      const tabelas = [
        "SchemaFilial",
        "SchemaFormula",
        "SchemaGrupo1",
        "SchemaGrupo2",
        "SchemaGrupo2Excecao",
        "SchemaGrupo3",
        "SchemaGrupoExcecao",
        "SchemaIteTabFor",
        "SchemaPedido",
        "SchemaPedidoItem",
        "SchemaPedidoItemExcecao",
        "SchemaItem",
        "ItemExcecaoAuto",
        "SchemaPromocaoItem",
        "SchemaTabela",
        "SchemaTipoPedido",
        "SchemaUnidade",
        "SchemaUsuario",
      ];

      tabelas.forEach((tabelaNomes) => {
        const objects = realm.objects(tabelaNomes);
        realm.delete(objects);
      });
    });

    realm.close();
    console.log("Todos os dados foram limpos com sucesso.");
  } catch (error) {
    console.error("Erro ao limpar os dados:", error);
  }
}

export { deletarTabelas };
