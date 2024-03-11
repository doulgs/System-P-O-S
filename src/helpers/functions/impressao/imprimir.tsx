import { Linking, ToastAndroid } from "react-native";

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

export { enviarImpressao, handleImpressaoReturn };
