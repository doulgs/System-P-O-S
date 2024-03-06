import { Linking } from "react-native";

interface OpenPaymentApp {
  path?: string;
  scheme?: string;
  return_scheme?: string; //Determina para onde será o retorno do deeplink. Deve ser o mesmo valor configurado no lugar da variável scheme no AndroidManifest.
  amount: string; //Valor do pagamento, em centavos. Aceita valores entre 0 e 999999999.
  editable_amount?: "1" | "0"; //Permite que o valor do pagamento seja editado diretamente no aplicativo de Pagamento. Valor 1 para true e 0 para false.
  transaction_type:
    | "DEBIT"
    | "CREDIT"
    | "VOUCHER"
    | "INSTANT_PAYMENT"
    | "PIX"
    | string; //Modalidade do pagamento: DEBIT, CREDIT, VOUCHER, INSTANT_PAYMENT e PIX. Esse campo aceita valor nulo.
  installment_type?: "MERCHANT" | "ISSUER" | "NONE"; //Tipo de parcelamento: MERCHANT (parcelado sem juros), ISSUER (parcelado com juros) e NONE (à vista). Esse campo aceita valor nulo.
  installment_count?: string; // Quantidade de parcelas. Aceita valores entre 2 e 99.
  order_id?: number; //Identificador do pedido. Aceita valores até 9223372036854775807. Caso queira utilizá-lo, habilitar a funcionalidade no aplicativo de Ajustes do POS.
}

const openPaymentApp = ({
  return_scheme = "linkpublipos",
  amount,
  editable_amount = "0",
  transaction_type = "CREDIT",
  installment_type = "NONE",
  installment_count = "0",
  order_id = 12,
}: OpenPaymentApp) => {
  // Construa a URL com os parâmetros desejados
  console.log(amount, transaction_type);
  const url = `payment-app://pay?return_scheme=${return_scheme}&amount=${amount}&editable_amount=${editable_amount}/1&transaction_type=${transaction_type}&installment_type=${installment_type}&order_id=${order_id}`;
  //Campos não mencionados que podem ser utilziados &installment_type=${installment_type}&installment_count=${installment_count}&order_id=${order_id}

  // Verifique se a URL pode ser aberta
  Linking.canOpenURL(url)
    .then((supported) => {
      if (supported) {
        return Linking.openURL(url);
      } else {
        console.log(`Não foi possível abrir a URL: ${url}`);
      }
    })
    .catch((err) => console.error("Erro ao tentar abrir a URL", err));
};

export { openPaymentApp };
