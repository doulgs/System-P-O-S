import api from "../../infra/services/api";
import { obterInfoDispositivo } from "../obterInfoDispositivo";
import { obterToken } from "../obterToken";

async function cadastrarDispositivoDB(chaveEmpresa: string) {
  try {
    const token = await obterToken();
    const Dispositivo = await obterInfoDispositivo();
    if (Dispositivo && Dispositivo.infoDispositivo) {
      const { data } = await api.post(
        "/pbl/Filial/CadastrarAparelho",
        {
          ChaveApps: chaveEmpresa,
          UUID: Dispositivo.infoDispositivo?.uniqueId,
          Modelo: Dispositivo.infoDispositivo?.Modelo,
          Dispositivo: `Android-${Dispositivo.infoDispositivo?.Versao}`,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { IsValid, Message, Data } = data;
      return { IsValid, Message, Data };
    }
  } catch (err) {
    console.error("Erro ao viincular dispositivo com a empresa", err);
  }
}

export { cadastrarDispositivoDB };
