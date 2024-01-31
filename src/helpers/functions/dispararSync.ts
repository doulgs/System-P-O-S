import { syncBairro } from "../../infra/command/syncBairro";
import { syncCidade } from "../../infra/command/syncCidade";
import { syncCondicao } from "../../infra/command/syncCondicao";
import { syncFormula } from "../../infra/command/syncFormula";
import { syncGrupo1 } from "../../infra/command/syncGrupo1";
import { syncGrupo2 } from "../../infra/command/syncGrupo2";
import { syncGrupo2Excecao } from "../../infra/command/syncGrupo2Excecao";
import { syncGrupo3 } from "../../infra/command/syncGrupo3";
import { syncGrupoExcecao } from "../../infra/command/syncGrupoExcecao";
import { syncIteTabFor } from "../../infra/command/syncIteTabFor";
import { syncItem } from "../../infra/command/syncItem";
import { syncItemExcecaoAuto } from "../../infra/command/syncItemExcecaoAuto";
import { syncPessoas } from "../../infra/command/syncPessoas";
import { syncPessoasItens } from "../../infra/command/syncPessoasItens";
import { syncPromocaoItem } from "../../infra/command/syncPromocaoItem";
import { syncTabela } from "../../infra/command/syncTabela";
import { syncUnidade } from "../../infra/command/syncUnidade";

async function dispararSync() {
  try {
    console.log("Inicializando o Sync");
    const { MsgBairro } = await syncBairro();
    const { MsgCidade } = await syncCidade();
    const { MsgCondicao } = await syncCondicao();
    const { MsgFormula } = await syncFormula();
    const { MsgGrupo1 } = await syncGrupo1();
    const { MsgGrupo2 } = await syncGrupo2();
    const { MsgGrupo2Excecao } = await syncGrupo2Excecao();
    const { MsgGrupo3 } = await syncGrupo3();
    const { MsgGrupoExcecao } = await syncGrupoExcecao();
    const { MsgIntItem } = await syncItem();
    const { MsgIteTabFor } = await syncIteTabFor();
    const { MsgItemExcecaoAuto } = await syncItemExcecaoAuto();
    const { MsgPessoas } = await syncPessoas();
    const { MsgPessoasItens } = await syncPessoasItens();
    const { MsgPromocaoItem } = await syncPromocaoItem();
    const { MsgTabela } = await syncTabela();
    const { MsgUnidade } = await syncUnidade();

    console.log(
      MsgBairro,
      MsgCidade,
      MsgCondicao,
      MsgFormula,
      MsgGrupo1,
      MsgGrupo2,
      MsgGrupo2Excecao,
      MsgGrupo3,
      MsgGrupoExcecao,
      MsgIntItem,
      MsgIteTabFor,
      MsgItemExcecaoAuto,
      MsgPessoas,
      MsgPessoasItens,
      MsgPromocaoItem,
      MsgTabela,
      MsgUnidade
    );
    return { sync: true };
  } catch (error) {
    console.log(error);
    return { sync: false };
  } finally {
    console.log("Finalizando o Sync");
  }
}

export { dispararSync };
