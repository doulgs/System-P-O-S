import React, { useState } from "react";

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

const Payment = () => {
  const { user } = useAuth();
  const { order, orderTotal } = useOrder();
  const navigation = useNavigation();

  const [pgmt, setPgmt] = useState<CondicoesDePagamentoProps | null>(null);

  function finalizarPedido() {}

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
          <Button onPress={() => {}} disabled={pgmt === null}>
            Finalizar
          </Button>
        </FooterContainer>
      </Footer>
    </Container>
  );
};

export default Payment;
