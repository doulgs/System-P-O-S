import Realm from "realm";
import { getRealm } from "../realm";
import { obterDadosDaTabelaAPI } from "../../helpers/obterDadosDaTabela";
import { NomeDaTabela } from "../../helpers/utils/nomeDasTabelasAPI";
import { NomeDosSchemas } from "../../helpers/utils/nomeDosSchemasRealmDB";

async function realizarSync(schema: NomeDosSchemas, tabela: NomeDaTabela) {
  const realm = await getRealm();
  const retornoApi = await obterDadosDaTabelaAPI(tabela);

  if (retornoApi?.IsValid) {
    const dados = retornoApi.Data;

    try {
      await realm.write(async () => {
        await Promise.all(
          dados.map(async (dadoApi: any) => {
            try {
              realm.create(schema, dadoApi, Realm.UpdateMode.Modified);
              console.log(`Sync realizado com sucesso ${schema}`);
            } catch (error) {
              console.error(`Falha na sincronização do ${schema}:`, error);
            }
          })
        );
      });

      return { message: `Sync realizado com sucesso ${schema}` };
    } catch (error) {
      console.error(`Erro ao escrever no Realm:`, error);
      return { message: `Erro ao escrever no Realm` };
    }
  }
}

export { realizarSync };
