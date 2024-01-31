import api from "../infra/services/api";
import { getRealm } from "../infra/realm";
import { obterToken } from "./obterToken";
import { NomeDaTabela } from "./utils/nomeDasTabelasAPI";
import { IntFilial } from "../database/interface/IntFilial";

async function obterDadosDaTabelaAPI(Table: NomeDaTabela) {
  try {
    const realm = await getRealm();
    const token = await obterToken();
    const filial = realm.objects<IntFilial>("FilialSchema");
    const site = filial.length > 0 ? filial[0].NomeSite : null;

    const { data } = await api.post(
      `/pbl/${Table}/GetAll`,
      { siteName: site },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    //console.log(data.Data);
    return { IsValid: data.IsValid, Message: data.Message, Data: data.Data };
  } catch (err) {
    console.error(`Erro na solicitação da tabela: ${Table}`, err);
  }
}

export { obterDadosDaTabelaAPI };
