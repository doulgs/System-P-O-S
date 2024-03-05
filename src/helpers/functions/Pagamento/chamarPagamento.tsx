import { Linking } from "react-native";

interface OpenPaymentApp {
  path: string;
  scheme: string;
  return_scheme: string; //Determina para onde será o retorno do deeplink. Deve ser o mesmo valor configurado no lugar da variável scheme no AndroidManifest.
  amount: number; //Valor do pagamento, em centavos. Aceita valores entre 0 e 999999999.
  editable_amount: "1" | "0"; //Permite que o valor do pagamento seja editado diretamente no aplicativo de Pagamento. Valor 1 para true e 0 para false.
  transaction_type: "DEBIT" | "CREDIT" | "VOUCHER" | "INSTANT_PAYMENT" | "PIX"; //Modalidade do pagamento: DEBIT, CREDIT, VOUCHER, INSTANT_PAYMENT e PIX. Esse campo aceita valor nulo.
  installment_type: "MERCHANT" | "ISSUER" | "NONE"; //Tipo de parcelamento: MERCHANT (parcelado sem juros), ISSUER (parcelado com juros) e NONE (à vista). Esse campo aceita valor nulo.
  installment_count: string; // Quantidade de parcelas. Aceita valores entre 2 e 99.
  order_id: number; //Identificador do pedido. Aceita valores até 9223372036854775807. Caso queira utilizá-lo, habilitar a funcionalidade no aplicativo de Ajustes do POS.
}

export const openPaymentApp = () => {
  // Construir a URL
  const uriBuilder = new URL("exp://192.168.1.57:8082/");
  uriBuilder.searchParams.append("return_scheme", "return_scheme");
  uriBuilder.searchParams.append("amount", "12");
  uriBuilder.searchParams.append("editable_amount", "false");
  uriBuilder.searchParams.append("transaction_type", "debit");
  uriBuilder.searchParams.append("installment_type", "none");
  uriBuilder.searchParams.append("installment_count", "2");
  uriBuilder.searchParams.append("order_id", "123");

  // Abrir a URL como um DeepLink
  Linking.openURL(uriBuilder.href).catch((err) =>
    console.error("Erro ao abrir o DeepLink:", err)
  );
};

// import { Linking, Platform } from "react-native";
// export const openPaymentApp = () => {
//   const appURI = "exp://192.168.1.57:8082/--/retorno-pagamento"; // Esquema de URI específico do aplicativo
//   Linking.openURL(appURI).catch((err) =>
//     console.error("Erro ao abrir o aplicativo:", err)
//   );
// };
