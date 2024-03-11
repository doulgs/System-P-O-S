import { Linking, ToastAndroid } from "react-native";
import { Item } from "../../../../database/interfaces/Interface-Item";

const enviarImpressao = async (arquivoJSON: string) => {
  const uri = `printer-app://print?SHOW_FEEDBACK_SCREEN=true/false&SCHEME_RETURN=linkpublipos&PRINTABLE_CONTENT=${encodeURIComponent(
    arquivoJSON
  )}`;

  try {
    const canOpen = await Linking.canOpenURL(uri);
    if (canOpen) {
      await Linking.openURL(uri);
    } else {
      ToastAndroid.show(
        "Não é possível abrir o aplicativo de impressão.",
        ToastAndroid.SHORT
      );
    }
  } catch (error) {
    console.error("Erro ao enviar a impressão:", error);
    ToastAndroid.show("Erro ao enviar a impressão.", ToastAndroid.SHORT);
  }
};

const realizarImpressao = async (order: Item[]) => {
  const printPedido = [];

  for (let o = 0; o < order.length; o++) {
    for (let i = 0; i < order[o].Amount; i++) {
      const excecoes = order[o].Excecoes.filter((value) => value.Amount >= 1)
        .map((value) => `\n \u2022 x${value.Amount ?? 0} ${value.Excecao}`)
        .join("");
      const conteudo = `${order[o].Descricao}${excecoes}`;

      printPedido.push({
        type: "text",
        content: conteudo,
        align: "left",
        size: "big",
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
  }
  //console.log(JSON.stringify(printPedido));
  await imprimir(JSON.stringify(printPedido));
  printPedido.length = 0;
};

async function imprimir(data: string) {
  console.log("AQUI");
  await enviarImpressao(data);
}

const handleImpressaoReturn = (event: { url?: string }) => {
  const { url } = event;
  if (url) {
    const params = new URLSearchParams(url);
    const result = params.get("result");
    switch (result) {
      case "SUCCESS":
        ToastAndroid.show(
          "Impressão realizada com sucesso.",
          ToastAndroid.SHORT
        );
        break;
      case "PRINTER_OUT_OF_PAPER":
        ToastAndroid.show(
          "Impressora sem papel ou com a tampa de bobina aberta.",
          ToastAndroid.SHORT
        );
        break;
      case "PRINTER_INIT_ERROR":
        ToastAndroid.show(
          "Erro ao inicializar a impressora.",
          ToastAndroid.SHORT
        );
        break;
      // Adicione outros casos conforme necessário
      // default:
      //   ToastAndroid.show(
      //     "Erro desconhecido durante a impressão.",
      //     ToastAndroid.SHORT
      //   );
      //   break;
    }
  }
};

export { enviarImpressao, realizarImpressao, handleImpressaoReturn };
