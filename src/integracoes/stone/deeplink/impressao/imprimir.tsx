import { Linking, ToastAndroid } from "react-native";

const enviarImpressao = async (jsonFile: string) => {
  const uri = new URL(
    `printer-app://print?SHOW_FEEDBACK_SCREEN=true&SCHEME_RETURN=linkpublipos&PRINTABLE_CONTENT=${jsonFile}`
  );
  try {
    const canOpen = await Linking.canOpenURL(uri.toString());
    if (canOpen) {
      await Linking.openURL(uri.toString());
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
