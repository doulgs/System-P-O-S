import { useEffect } from "react";
import { Linking, ToastAndroid } from "react-native";
import { enviarImpressao } from "../../../integracoes/stone/deeplink/impressao/imprimir";

import { Container } from "./styles";
import { handleImpressao } from "../../../integracoes/stone/deeplink/impressao/layoutImpressao";
import { useAuth } from "../../../context/authContext";
import { useOrder } from "../../../context/orderContext";
import { useNavigation } from "@react-navigation/native";

interface UrlParams {
  SUCCESS?: string;
}

export default function PaymentProcess() {
  const navigation = useNavigation();
  const { user } = useAuth();
  const { order } = useOrder();

  useEffect(() => {
    const handleImpressaoReturn = async (event: { url: string }) => {
      console.log("DeepLink Impressao -->:", event.url);
      const url = new URL(event.url);
      const params = new URLSearchParams(url.search);

      const extractedParams: UrlParams = {
        SUCCESS: params.get("DEEPLINK_RETURN") ?? undefined,
      };

      switch (extractedParams.SUCCESS) {
        case "SUCCESS":
          ToastAndroid.show(
            "Impressão realizada com sucesso.",
            ToastAndroid.SHORT
          );
          navigation.navigate("Home");
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
        case "PRINTER_LOW_ENERGY":
          ToastAndroid.show("Máquina com baixa energia.", ToastAndroid.SHORT);
          break;
        case "PRINTER_BUSY":
          ToastAndroid.show("Impressora ocupada.", ToastAndroid.SHORT);
          break;
        case "PRINTER_UNSUPPORTED_FORMAT":
          ToastAndroid.show("Formato não suportado.", ToastAndroid.SHORT);
          break;
        case "PRINTER_INVALID_DATA":
          ToastAndroid.show("Dados inválidos.", ToastAndroid.SHORT);
          break;
        case "PRINTER_OVERHEATING":
          ToastAndroid.show(
            "Superaquecimento da impressora.",
            ToastAndroid.SHORT
          );
          break;
        case "PRINTER_PAPER_JAM":
          ToastAndroid.show(
            "Papel preso na caixa de bobina.",
            ToastAndroid.SHORT
          );
          break;
        case "PRINTER_PRINT_ERROR":
          ToastAndroid.show("Erro genérico da impressora.", ToastAndroid.SHORT);
          break;
      }
    };

    async function getRetorno() {
      if (!user || !order) return;
      const retorno = handleImpressao(order, user);
      await enviarImpressao(await retorno);
      Linking.addEventListener("url", handleImpressaoReturn);
    }
    getRetorno();

    return () => {
      // Garante que o listener seja removido quando o componente for desmontado
      Linking.removeAllListeners("url");
    };
  }, []);

  return <Container>
    
  </Container>;
}
