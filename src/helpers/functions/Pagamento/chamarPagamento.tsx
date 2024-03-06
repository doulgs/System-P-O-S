import { Linking } from "react-native";

interface OpenPaymentApp {
  path?: string;
  scheme?: string;
  return_scheme?: string; //Determina para onde será o retorno do deeplink. Deve ser o mesmo valor configurado no lugar da variável scheme no AndroidManifest.
  amount: number; //Valor do pagamento, em centavos. Aceita valores entre 0 e 999999999.
  editable_amount?: "1" | "0"; //Permite que o valor do pagamento seja editado diretamente no aplicativo de Pagamento. Valor 1 para true e 0 para false.
  transaction_type: "DEBIT" | "CREDIT" | "VOUCHER" | "INSTANT_PAYMENT" | "PIX"; //Modalidade do pagamento: DEBIT, CREDIT, VOUCHER, INSTANT_PAYMENT e PIX. Esse campo aceita valor nulo.
  installment_type?: "MERCHANT" | "ISSUER" | "NONE"; //Tipo de parcelamento: MERCHANT (parcelado sem juros), ISSUER (parcelado com juros) e NONE (à vista). Esse campo aceita valor nulo.
  installment_count?: string; // Quantidade de parcelas. Aceita valores entre 2 e 99.
  order_id?: number; //Identificador do pedido. Aceita valores até 9223372036854775807. Caso queira utilizá-lo, habilitar a funcionalidade no aplicativo de Ajustes do POS.
}

const openPaymentApp = ({
  return_scheme = "linkpublipos",
  amount,
  editable_amount = "0",
  transaction_type = "CREDIT",
  order_id = 123,
}: OpenPaymentApp) => {
  // Construa a URL com os parâmetros desejados
  const url = `payment-app://pay?return_scheme=${return_scheme}&amount=${amount}&editable_amount=${editable_amount}/1&transaction_type=${transaction_type}&order_id=${order_id}`;
  //Campos não mencionados que podem ser utilziados &installment_type=${installment_type}&installment_count=${installment_count}

  // Verifique se a URL pode ser aberta
  Linking.canOpenURL(url)
    .then((supported) => {
      if (supported) {
        // Se a URL pode ser aberta, abra-a
        return Linking.openURL(url);
      } else {
        console.log(`Não foi possível abrir a URL: ${url}`);
      }
    })
    .catch((err) => console.error("Erro ao tentar abrir a URL", err));
};

// Exporta a função para abrir o aplicativo de pagamento
export { openPaymentApp };
