import Realm from "realm";
import { getRealm } from "../../infra/realm";

type NomeTabela =
  | "BairroSchema"
  | "CidadeSchema"
  | "CondicaoSchema"
  | "FilialSchema"
  | "FormulaSchema"
  | "Grupo1Schema"
  | "Grupo2ExcecaoSchema"
  | "Grupo2Schema"
  | "Grupo3Schema"
  | "GrupoExcecaoSchema"
  | "ItemExcecaoAutoSchema"
  | "ItemSchema"
  | "PedidosSchema"
  | "PessoasItensSchema"
  | "PessoasSchema"
  | "PromocaoItemSchema"
  | "TabelaSchema"
  | "UnidadeSchema"
  | "IteTabForSchema"
  | "UserSchema";

export const gerarHandle = async (Table: NomeTabela): Promise<number> => {
  try {
    const realm = await getRealm();
    const maiorHandle = realm.objects<Realm.Object>(Table).max("Handle") as
      | number
      | undefined;

    // Se não houver nenhum registro na tabela, retornar 1 como o primeiro handle
    if (maiorHandle === undefined) {
      return 1;
    }

    return maiorHandle + 1;
  } catch (error) {
    console.error("Erro ao obter o maior handle:", error);
    // Em caso de erro, retornar -1 ou outro valor indicando falha
    return -1;
  }
};
