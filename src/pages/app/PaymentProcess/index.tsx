import { Alert } from "react-native";
import { Container, Loading } from "./styles";
import { useAuth } from "../../../context/authContext";
import { useOrder } from "../../../context/orderContext";
import { useNavigation } from "@react-navigation/native";
import { processarImpressao } from "../../../integracoes/stone/deeplink/impressao/ImpressaoManager";

export default function PaymentProcess() {
  const navigation = useNavigation();
  const { user } = useAuth();
  const { order } = useOrder();
  if (user !== null) {
    processarImpressao(order, user)
      .then(() => {
        console.log("Todos os itens foram impressos com sucesso.");
        // Adicionar lógica para realizar ações após a impressão de todos os itens
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.error("Erro ao processar a impressão:", error);
        Alert.alert("Erro", "Não foi possível imprimir todos os itens.");
      });
  }
  return (
    <Container>
      <Loading />
    </Container>
  );
}
