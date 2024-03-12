import { Item } from "../../../../database/interfaces/Interface-Item";
import { UsuarioProp } from "../../../../context/authContext";
import { obterDataHora } from "../../../../helpers/obterDataHora";

interface PrintPedidoItem {
  type?: string;
  content?: string;
  align?: string;
  size?: string;
}

const handleImpressao = async (
  order: Item[],
  user: UsuarioProp
): Promise<string> => {
  const printPedido: PrintPedidoItem[] = [];

  order.forEach((item) => {
    for (let i = 0; i < item.Amount; i++) {
      const filial = user.NomeEmpresa;
      const dataHora = obterDataHora().dataHoraAtual;

      const excecoes = item.Excecoes.filter((value) => value.Amount >= 1)
        .map((value) => `\n \u2022 x${value.Amount ?? 0} ${value.Excecao}`)
        .join("");
      const conteudo = `x1 - ${item.Descricao}${excecoes}`;

      printPedido.push({
        type: "line",
        content: filial?.toString(),
      });
      printPedido.push({
        type: "line",
        content: dataHora.toString(),
      });
      printPedido.push({
        type: "line",
        content: conteudo.toString(),
      });
      printPedido.push({
        type: "line",
        content: " ",
      });
      printPedido.push({
        type: "line",
        content: "----------------------------------",
      });
      printPedido.push({
        type: "line",
        content: " ",
      });
    }
  });

  const jsonString = JSON.stringify(printPedido);
  return jsonString;
};

export { handleImpressao };
