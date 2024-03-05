import React, { useState, useEffect } from "react";
import { ActivityIndicator, Alert } from "react-native";
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

interface ParsedURL {
  protocol: string;
  host: string;
  pathname: string;
  queryParams?: { [key: string]: string };
}

const Payment = () => {
  const redirectURL = useURL();
  const navigation = useNavigation();

  const { user } = useAuth();
  const { order, orderTotal, LimparCarrinho } = useOrder();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const parseURL = (url: string): ParsedURL => {
      const result: ParsedURL = {} as ParsedURL;
      const [fullPath, queryString] = url.split("?");
      const [protocol, host, ...pathParts] = fullPath.split("/");

      result.protocol = protocol.replace(/:$/, "");
      result.host = host;
      result.pathname = "/" + pathParts.join("/");

      if (queryString) {
        result.queryParams = {};
        queryString.split("&").forEach((param) => {
          const [key, value] = param.split("=");
          result.queryParams![key] = decodeURIComponent(
            value.replace(/\+/g, " ")
          );
        });
      }

      return result;
    };

    const parsedURL = redirectURL ? parseURL(redirectURL) : null;

    if (parsedURL?.queryParams?.code === "0") {
      console.log("teste", parsedURL);
      LimparCarrinho();
      navigation.navigate("Home");
    } else if (parsedURL?.queryParams?.code === "2") {
      Alert.alert("Pagamento cancelado");
    }
  }, [redirectURL, LimparCarrinho, navigation]);

  const finalizarPedido = async () => {
    setIsLoading(true);
    openPaymentApp();
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
        <ContainerTotal>
          <Text weight="700" size={20}>
            Total : {formatarParaMoeda(orderTotal)}
          </Text>
        </ContainerTotal>
      </FooterExtract>

      <Footer>
        <FooterContainer>
          <Button onPress={() => finalizarPedido()}>
            {isLoading ? <ActivityIndicator /> : "Finalizar"}
          </Button>
        </FooterContainer>
      </Footer>
    </Container>
  );
};

export default Payment;
