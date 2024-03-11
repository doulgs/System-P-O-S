// import { Linking } from "react-native";

// interface ImprimirProps {
//   SHOW_FEEDBACK_SCREEN?: "true" | "false";
//   SCHEME_RETURN?: "linkpublipos";
// }

// const layout = [
//   {
//     type: "text",
//     content: "texto centro grande",
//     align: "center",
//     size: "big",
//   },
// ];

// /**
//  * Abre o aplicativo de pagamento com os parâmetros fornecidos.
//  * @param {realizarImpressao} params Parâmetros para abrir o aplicativo de pagamento.
//  */
// const realizarImpressao = async ({
//   SHOW_FEEDBACK_SCREEN = "true",
//   SCHEME_RETURN,
// }: ImprimirProps) => {
//   // Validação de parâmetros
//   if (!SHOW_FEEDBACK_SCREEN || !SCHEME_RETURN) {
//     console.error(
//       "Parâmetros inválidos: amount e transaction_type são obrigatórios."
//     );
//     return;
//   }

//   // Construção da URL
//   const url = new URL("printer-app://print");
//   url.searchParams.append("SHOW_FEEDBACK_SCREEN", SHOW_FEEDBACK_SCREEN);
//   url.searchParams.append("SCHEME_RETURN", SCHEME_RETURN);
//   url.searchParams.append("PRINTABLE_CONTENT", layout);

//   try {
//     const supported = await Linking.canOpenURL(url.toString());
//     if (supported) {
//       await Linking.openURL(url.toString());
//     } else {
//       console.log(`Não foi possível abrir a URL: ${url}`);
//     }
//   } catch (err) {
//     console.error("Erro ao tentar abrir a URL", err);
//   }
// };

// export { realizarImpressao };
