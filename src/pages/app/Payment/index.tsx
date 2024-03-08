import React, { useState, useEffect } from "react";
import { ActivityIndicator, Alert, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../../context/authContext";
import { useOrder } from "../../../context/orderContext";
import { useURL } from "expo-linking";

import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { formatarParaMoeda } from "../../../helpers/utils/formatarParaMoeda";
import { openPaymentApp } from "../../../helpers/functions/Pagamento/chamarPagamento";

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

  useEffect(() => {
    const handleOpenURL = (event: { url: string }) => {
      console.log("Deep link recebido:", event.url);
      Alert.alert("Deep link recebido", event.url);

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

      console.log("Passei aqui");

      // Exemplo de uso das propriedades extraídas e tipadas
      console.log(
        "Nome do titular do cartão:",
        extractedParams.cardholder_name
      );
      console.log("Chave de Transação do Iniciador:", extractedParams.itk);
      // ... e assim por diante para os outros parâmetros
    };

    Linking.addEventListener("url", handleOpenURL);
    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log("O aplicativo foi aberto por um deep link:", url);
        Alert.alert("O aplicativo foi aberto por um deep link", url);
      }
    });

    return () => {
      Linking.removeAllListeners("url");
    };
  }, []);

  const finalizarPedido = async () => {
    setIsLoading(true);

    openPaymentApp({
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
