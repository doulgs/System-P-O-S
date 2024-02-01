import Realm from "realm";
import { getRealm } from "../realm";
import { obterDadosDaTabelaAPI } from "../../helpers/obterDadosDaTabela";
import { NomeDaTabela } from "../../helpers/utils/nomeDasTabelasAPI";
import { NomeDosSchemas } from "../../helpers/utils/nomeDosSchemasRealmDB";

async function realizarSync(schema: NomeDosSchemas, tabela: NomeDaTabela) {
  const realm = await getRealm();
  const retornoApi = await obterDadosDaTabelaAPI(`${tabela}`);

  if (retornoApi?.IsValid) {
    const dados = retornoApi?.Data;

    dados.forEach((dadoApi: any) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            `${schema}`,
            dadoApi,
            Realm.UpdateMode.Modified
          );
          console.log(`Sync realizado com sucesso ${schema}`);
          return { message: `Sync realizado com sucesso ${schema}` };
        });
      } catch (error) {
        console.log(`Sync encontrou uma falha no ${schema}`, error);
        return { message: `Sync encontrou uma falha no ${schema}` };
      }
    });
  }
}

export { realizarSync };
