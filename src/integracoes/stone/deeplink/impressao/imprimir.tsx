import { Linking, ToastAndroid } from "react-native";

const enviarImpressao = async (jsonFile: string) => {
  const uri = `printer-app://print?SHOW_FEEDBACK_SCREEN=false&SCHEME_RETURN=linkpublipos&PRINTABLE_CONTENT=${encodeURIComponent(
    jsonFile
  )}`;

  // const uri = new URL("printer-app://print");
  // uri.searchParams.append("SHOW_FEEDBACK_SCREEN", "TRUE");
  // uri.searchParams.append("SCHEME_RETURN", "linkpublipos");
  // uri.searchParams.append(
  //   "PRINTABLE_CONTENT",
  //   `${encodeURIComponent(jsonFile)}`
  // );

  try {
    const canOpen = await Linking.canOpenURL(uri);
    if (canOpen) {
      //showErrorMessage("Sucesso");
      await Linking.openURL(uri);
    } else {
      showErrorMessage("Não é possível abrir o aplicativo de impressão.");
    }
  } catch (error) {
    console.error("Erro ao enviar a impressão:", error);
    showErrorMessage("Erro ao enviar a impressão.");
  }
};

const showErrorMessage = (message: string) => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};

export { enviarImpressao };
