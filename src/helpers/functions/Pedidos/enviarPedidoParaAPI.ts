import api from "../../../infra/services/api";
import { Pedido } from "../../../database/interfaces/Interface-Pedido";

interface RetornoEnviarPedidoParaAPI {
  IsValid: boolean;
  Message: string;
  Data: number;
}

async function enviarPedidoParaAPI(
  pedido: Pedido,
  nomeDoSite: string | null | undefined,
  token: string
): Promise<RetornoEnviarPedidoParaAPI> {
  const pedidoJSON = JSON.stringify(pedido);
  try {
    const { data } = await api.post(
      "/pbl/Pedido/Insert",
      { siteName: nomeDoSite, Entity: pedidoJSON },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const { IsValid, Message, Data } = data;
    return { IsValid, Message, Data };
  } catch (error) {
    throw new Error("Erro ao enviar os dados para a API");
  }
}

export { enviarPedidoParaAPI };
