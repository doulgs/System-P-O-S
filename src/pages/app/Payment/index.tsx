import React, { useState, useEffect } from "react";
import { ActivityIndicator, Alert, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../../context/authContext";
import { useOrder } from "../../../context/orderContext";
import { useURL } from "expo-linking";

import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { formatarParaMoeda } from "../../../helpers/utils/formatarParaMoeda";
import { abrirAppPagamento } from "../../../integracoes/stone/deeplink/pagamento/chamarPagamento";

import {
  Container,
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
  Footer,
  FooterContainer,
} from "./styles";

import {
  CondicoesDePagamento,
  CondicoesDePagamentoProps,
} from "../../../helpers/condicoesDePagamento";
import { Select } from "../../../components/Select";
import {
  enviarImpressao,
  handleImpressaoReturn,
} from "../../../integracoes/stone/deeplink/impressao/imprimir";
import { Item } from "../../../database/interfaces/Interface-Item";

interface UrlParams {
  cardholder_name?: string;
  itk?: string;
  atk?: string;
  authorization_date_time?: string;
  brand?: string;
  order_id?: string;
  authorization_code?: string;
  installment_count?: string;
  pan?: string;
  type?: string;
  entry_mode?: string;
  account_id?: string;
  customer_wallet_provider_id?: string;
  code?: string;
}

const Payment = () => {
  const redirectURL = useURL();
  const navigation = useNavigation();

  const { user } = useAuth();
  const { order, orderTotal, LimparCarrinho } = useOrder();
  const [pgmt, setPgmt] = useState<CondicoesDePagamentoProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [statusPayment, setStatusPayment] = useState(false);

  useEffect(() => {
    const handleOpenURL = (event: { url: string }) => {
      console.log("Deep link recebido:", event.url);
      //Alert.alert("Deep link recebido", event.url);

      // Extrai a string de consulta do URL
      const url = new URL(event.url);
      const params = new URLSearchParams(url.search);

      // Extrai as propriedades desejadas e as tipa usando a interface UrlParams
      const extractedParams: UrlParams = {
        cardholder_name: params.get("cardholder_name") ?? undefined,
        itk: params.get("itk") ?? undefined,
        atk: params.get("atk") ?? undefined,
        authorization_date_time:
          params.get("authorization_date_time") ?? undefined,
        brand: params.get("brand") ?? undefined,
        order_id: params.get("order_id") ?? undefined,
        authorization_code: params.get("authorization_code") ?? undefined,
        installment_count: params.get("installment_count") ?? undefined,
        pan: params.get("pan") ?? undefined,
        type: params.get("type") ?? undefined,
        entry_mode: params.get("entry_mode") ?? undefined,
        account_id: params.get("account_id") ?? undefined,
        customer_wallet_provider_id:
          params.get("customer_wallet_provider_id") ?? undefined,
        code: params.get("code") ?? undefined,
      };

      if (extractedParams.code === "0") {
        handleImpressao(order);
      }
    };

    Linking.addEventListener("url", handleOpenURL);
    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log("O aplicativo foi aberto por um deep link:", url);
        // Alert.alert("O aplicativo foi aberto por um deep link", url);
      }
    });

    return () => {
      Linking.removeAllListeners("url");
    };
  }, []);

  useEffect(() => {
    // Adiciona um listener para capturar o retorno da impressão
    Linking.addEventListener("url", handleImpressaoReturn);
    // Remove o listener quando o componente é desmontado
    return () => {
      Linking.removeAllListeners("url");
    };
  }, []);

  const handleImpressao = async (order: Item[]) => {
    const arquivoJSON = JSON.stringify([
      {
        type: "image",
        imagePath:
          "iVBORw0KGgoAAAANSUhEUgAAAHcAAAAuCAAAAAA309lpAAACMklEQVRYw91YQXLDIAyUMj027Us606f6RL7lJP0Ise/bg7ERSLLdZkxnyiVGIK0AoRVh0J+0l2ZITCAmSus8tYNNv9wUl8Xn2A6XZec8tsK9lN0zEaFBCxMc0M3IoHawBAAxffLx9/frY1kkEV0/iYjC8bjjmSRuCrHjcXMoS9zD4/nqePNf10v2whrkDRjLR4t8BWPXbdyRmccDgBMZUXDiiv2DeSK4sKwWrfgIda8V/6L6blZvLMARTescAohCD7xlcsItjYXEXHn2LIESzO3mDARPYTJXwiQ/VgWFobsYGKRdRy5x6/1QuAPpKdq89MiTS1x9EBXuYJyVZd46p6ndXVwAqfwJpd4C20uLk/LsUIilQ5Q11A4tuIU8Ti4bi8oz6lNX8iD8rNUdXDm3iMs81le4pUOLOJrGatzBx1VqVRSU8qAdNRc855GwHxcFblQbYTvqx3M0ZxZnZeBq+UoayI0h3y7QPMhOyQA9JMkO9aMIqs6Rmrw73T6ey9anvDX5kbinvT2PW7yYzj8ogrcYqBOJjNxc21d5EjmH0e/iaqUV9dXj3YgYtkvCjbjaqs5O+85MxVvwTcZdhR5YuFbckCSfNkHUolTcE9Cq9iQfXtV62bo9nUBIm8AXedPidimVFIjZCdYlTw4W8RtsatKC7Bt7D4t5tMle9qPD+y4uyL81FS/UnnVu3eMzhuj3G7CqzkHF77ISsaoraSsqVnRhq3rSZ+F5Ur//b5zOOVoAwDc6szxdC+PYAAAAAABJRU5ErkJggg==",
      },
    ]);

    await enviarImpressao(arquivoJSON);
  };

  const finalizarPedido = async () => {
    setIsLoading(true);

    abrirAppPagamento({
      amount: formatarParaMoeda(orderTotal).replace(/[^0-9]/g, ""),
      transaction_type: pgmt?.type ?? "DEBIT",
    });

    setIsLoading(false);
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
              <Text weight="600">Descrição</Text>
            </ContentDescricao>
            <ContentValor>
              <Text weight="600">Valor</Text>
            </ContentValor>
            <ContentTotal>
              <Text weight="600">Total</Text>
            </ContentTotal>
          </BodyExtractHeader>

          <ExtractScrollView>
            {order.map((value, index) => (
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
            ))}
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
          <Button onPress={() => finalizarPedido()} disabled={!pgmt}>
            {isLoading ? <ActivityIndicator /> : "Finalizar"}
          </Button>
        </FooterContainer>
      </Footer>
    </Container>
  );
};

export default Payment;
