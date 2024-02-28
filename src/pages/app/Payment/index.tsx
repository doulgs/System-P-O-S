import React, { useState } from "react";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";

import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../../context/authContext";
import { useOrder } from "../../../context/orderContext";

import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { Select } from "../../../components/Select";

import { formatarParaMoeda } from "../../../helpers/utils/formatarParaMoeda";

import {
  Container,
  Footer,
  FooterContainer,
  Extract,
  HeaderExtract,
  BodyExtract,
  BodyExtractHeader,
  ContentQtd,
  ContentDescricao,
  ContentValor,
  ContentTotal,
  BodyExtractItens,
  FooterExtract,
  ContainerTotal,
  ExtractScrollView,
} from "./styles";

import {
  CondicoesDePagamento,
  CondicoesDePagamentoProps,
} from "../../../helpers/condicoesDePagamento";
import { ActivityIndicator } from "react-native";
import { RegistrarPedido } from "../../../helpers/functions/Pedidos/registrarPedido";

const Payment = () => {
  const { user } = useAuth();
  const { order, orderTotal, LimparCarrinho } = useOrder();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const [pgmt, setPgmt] = useState<CondicoesDePagamentoProps | null>(null);

  //   Escala de 0.33
  //   const html = `<!DOCTYPE html>
  //   <html lang="pt-BR">
  //   <head>
  //       <meta charset="UTF-8">
  //       <title>Extrato de Pedido</title>
  //       <style>
  //           /* Estilos para tela */
  //           body {
  //               font-family: Arial, sans-serif;
  //               padding: 0;
  //               margin: 0;
  //           }
  //           .container {
  //               border: 1px solid #ccc;
  //               padding: 10px;
  //               border-radius: 5px;
  //               background-color: #f9f9f9;
  //               text-align: center; /* Centralizando o conteúdo */
  //               font-size: 40px; /* Tamanho de fonte geral */
  //           }
  //           h1, h2, p {
  //               margin: 0;
  //           }
  //           .header {
  //               margin-bottom: 20px; /* Espaçamento abaixo do cabeçalho */
  //           }
  //           .body-extract-header {
  //               display: flex;
  //               flex-direction: row;
  //               padding: 10px 2px; /* Adicionando espaçamento interno superior e inferior */
  //               border-bottom: 0.5px solid black;
  //           }
  //           .content-qtd, .content-descricao, .content-valor, .content-total {
  //               flex: 1;
  //               text-align: center; /* Centralizando o texto */
  //           }
  //           .item {
  //               margin-top: 10px; /* Espaçamento entre os itens */
  //               display: flex;
  //               flex-direction: row;
  //               justify-content: space-between;
  //               align-items: center;
  //               padding: 5px;
  //           }
  //           .descricao {
  //               flex: 1; /* Ocupa o espaço restante */
  //               max-width: 200px; /* Tamanho máximo para a descrição */
  //               overflow-wrap: break-word; /* Permite que o texto quebre quando ultrapassar o tamanho máximo */
  //           }
  //           .total {
  //               font-weight: bold;
  //               margin-top: 20px; /* Espaçamento acima do total */
  //           }
  //       </style>
  //   </head>
  //   <body>
  //   <div class="container">
  //       <div class="header">
  //           <h1>${user?.NomeEmpresa}</h1>
  //           <p>
  //               ${user?.EnderecoEmpresa} |
  //               ${user?.NumeroEmpresa} |
  //               ${user?.CepEmpresa}
  //               ${user?.ComplementoEmpresa}
  //           </p>
  //           <p>
  //               ${user?.FoneEmpresa} |
  //               ${user?.CidadeEmpresa}
  //           </p>
  //       </div>
  //       <div class="body-extract-header">
  //           <div class="content-descricao">Descrição</div>
  //           <div class="content-qtd">Qtd</div>
  //           <div class="content-valor">Valor</div>
  //           <div class="content-total">Total</div>
  //       </div>
  //       <div>
  //           ${order
  //             .map((value) => {
  //               return `
  //                   <div class="item">
  //                       <p class="descricao">${value.Descricao}</p>
  //                       <p>${value.Amount}x</p>
  //                       <p>${formatarParaMoeda(value.VendaValor ?? 0)}</p>
  //                       <p>${formatarParaMoeda(value.Total)}</p>
  //                   </div>
  //                   `;
  //             })
  //             .join("")}
  //       </div>
  //       <div class="total">
  //           <p>Forma de Pagamento: ${pgmt?.name}</p>
  //           <p>Total do Pedido: ${formatarParaMoeda(orderTotal)}</p>
  //       </div>
  //   </div>
  //   </body>
  //   </html>

  //      `;
  //  Escala de 0.33
  //   const html = `
  //   <!DOCTYPE html>
  //   <html lang="pt-BR">
  //   <head>
  //     <meta charset="UTF-8">
  //     <title>Extrato de Pedido</title>
  //     <style>
  //       @media print {
  //         body {
  //           transform: scale(0.33);
  //           transform-origin: left top;
  //         }
  //       }
  //       /* Estilos para tela */
  //       body {
  //         font-family: Arial, sans-serif;
  //         padding: 0;
  //         margin: 0;
  //       }
  //       .container {
  //         border: 1px solid #ccc;
  //         padding: 10px;
  //         border-radius: 5px;
  //         background-color: #f9f9f9;
  //         text-align: center; /* Centralizando o conteúdo */
  //         font-size: 40px; /* Tamanho de fonte geral */
  //       }
  //       h1, h2, p {
  //         margin: 0;
  //       }
  //       .header {
  //         margin-bottom: 20px; /* Espaçamento abaixo do cabeçalho */
  //       }
  //       .body-extract-header {
  //         display: flex;
  //         flex-direction: row;
  //         padding: 10px 2px; /* Adicionando espaçamento interno superior e inferior */
  //         border-bottom: 0.5px solid black;
  //       }
  //       .content-qtd, .content-descricao, .content-valor, .content-total {
  //         flex: 1;
  //         text-align: center; /* Centralizando o texto */
  //       }
  //       .item {
  //         margin-top: 10px; /* Espaçamento entre os itens */
  //         display: flex;
  //         flex-direction: row;
  //         justify-content: space-between;
  //         align-items: center;
  //         padding: 5px;
  //       }
  //       .descricao {
  //         flex: 1; /* Ocupa o espaço restante */
  //         max-width: 200px; /* Tamanho máximo para a descrição */
  //         overflow-wrap: break-word; /* Permite que o texto quebre quando ultrapassar o tamanho máximo */
  //       }
  //       .total {
  //         font-weight: bold;
  //         margin-top: 20px; /* Espaçamento acima do total */
  //       }
  //     </style>
  //   </head>
  //   <body>
  //   <div class="container">
  //     <div class="header">
  //       <h1>${user?.NomeEmpresa}</h1>
  //       <p>
  //         ${user?.EnderecoEmpresa} |
  //         ${user?.NumeroEmpresa} |
  //         ${user?.CepEmpresa}
  //         ${user?.ComplementoEmpresa}
  //       </p>
  //       <p>
  //         ${user?.FoneEmpresa} |
  //         ${user?.CidadeEmpresa}
  //       </p>
  //     </div>
  //     <div class="body-extract-header">
  //       <div class="content-descricao">Descrição</div>
  //       <div class="content-qtd">Qtd</div>
  //       <div class="content-valor">Valor</div>
  //       <div class="content-total">Total</div>
  //     </div>
  //     <div>
  //       ${order
  //         .map((value) => {
  //           return `
  //           <div class="item">
  //             <p class="descricao">${value.Descricao}</p>
  //             <p>${value.Amount}x</p>
  //             <p>${formatarParaMoeda(value.VendaValor ?? 0)}</p>
  //             <p>${formatarParaMoeda(value.Total)}</p>
  //           </div>
  //           `;
  //         })
  //         .join("")}
  //     </div>
  //     <div class="total">
  //       <p>Forma de Pagamento: ${pgmt?.name}</p>
  //       <p>Total do Pedido: ${formatarParaMoeda(orderTotal)}</p>
  //     </div>
  //   </div>
  //   </body>
  //   </html>

  //      `;

  //   const finalizarPedido = async () => {
  //     const { uri } = await printToFileAsync({
  //       html: html,
  //       base64: true,
  //     });

  //     await shareAsync(uri);
  //     LimparCarrinho();
  //     navigation.navigate("Home");
  //   };

  const finalizarPedido = async () => {
    setIsLoading(true);
    // Registrar o pedido
    //const NOMECLIENTE = "*** CONSUMIDOR ***";
    const NOMECLIENTE = "*** CONSUMIDOR-TESTE ***";

    // "Pago" | "A confirmar" | "Previsto" | "Rejeitado"

    const condicao = pgmt ? pgmt.Handle : 0;
    await RegistrarPedido(order, orderTotal, condicao, NOMECLIENTE);
    setIsLoading(false);
    LimparCarrinho();
    navigation.navigate("Home");
  };

  return (
    <Container>
      <Extract>
        <HeaderExtract>
          <Text weight="700">{user?.NomeEmpresa}</Text>
          <Text size={14}>
            {user?.EnderecoEmpresa} | {user?.NumeroEmpresa} | {user?.CepEmpresa}
            {user?.ComplementoEmpresa}
          </Text>
          <Text size={14}>
            {user?.FoneEmpresa} | {user?.CidadeEmpresa}
          </Text>
        </HeaderExtract>

        <BodyExtract>
          <BodyExtractHeader>
            <ContentQtd>
              <Text weight="600">Qtd</Text>
            </ContentQtd>
            <ContentDescricao>
              <Text weight="600">Descição</Text>
            </ContentDescricao>
            <ContentValor>
              <Text weight="600">Valor</Text>
            </ContentValor>
            <ContentTotal>
              <Text weight="600">Total</Text>
            </ContentTotal>
          </BodyExtractHeader>

          <ExtractScrollView>
            {order.map((value, index) => {
              return (
                <BodyExtractItens key={index}>
                  <ContentQtd>
                    <Text weight="600">{value.Amount}x</Text>
                  </ContentQtd>
                  <ContentDescricao>
                    <Text numberOfLines={2}>{value.Descricao}</Text>
                  </ContentDescricao>
                  <ContentValor>
                    <Text weight="600">
                      {formatarParaMoeda(value.VendaValor ?? 0)}
                    </Text>
                  </ContentValor>
                  <ContentTotal>
                    <Text weight="600">{formatarParaMoeda(value.Total)}</Text>
                  </ContentTotal>
                </BodyExtractItens>
              );
            })}
          </ExtractScrollView>
        </BodyExtract>
      </Extract>

      <FooterExtract>
        <Select
          text="Forma de pagamento"
          optins={CondicoesDePagamento}
          onChangeSelect={(codicao) => setPgmt(codicao)}
        />

        <ContainerTotal>
          <Text weight="700" size={20}>
            Total : {formatarParaMoeda(orderTotal)}
          </Text>
        </ContainerTotal>
      </FooterExtract>

      <Footer>
        <FooterContainer>
          <Button onPress={() => finalizarPedido()} disabled={pgmt === null}>
            {isLoading ? <ActivityIndicator /> : "Finalizar"}
          </Button>
        </FooterContainer>
      </Footer>
    </Container>
  );
};

export default Payment;
