import React from "react";
import { useRoute } from "@react-navigation/native";
import { SectionList } from "react-native";

import { useOrder } from "../../../context/orderContext";

import { ExceptionLayout } from "../../../components/ExceptionLayout";
import { Grupo2Excecao } from "../../../database/interfaces/Interface-Grupo2Excecao";
import { Text } from "../../../components/Text";

type ExceptionsProps = {
  indexItem: number;
};

const Exceptions: React.FC = () => {
  const { indexItem } = useRoute().params as ExceptionsProps;
  const { order, AdicionarQuantidadeExcecao, RemoverQuantidadeExcecao } =
    useOrder();
  const exception = order[indexItem].Excecoes;

  // Agrupando as exceções com base no Grupo2
  const agruparExcecoes: { [key: string]: Grupo2Excecao[] } = exception.reduce(
    (acc: { [key: string]: Grupo2Excecao[] }, excecao) => {
      const grupoKey = excecao.Grupo2?.Nome || "Outros";
      if (!acc[grupoKey]) {
        acc[grupoKey] = [];
      }
      acc[grupoKey].push(excecao); // Adicionando toda a excecao ao grupo
      return acc;
    },
    {}
  );

  // Convertendo os dados agrupados em um array de seções
  const sections = Object.keys(agruparExcecoes).map((grupoKey) => ({
    title: grupoKey,
    data: agruparExcecoes[grupoKey],
  }));

  return (
    <SectionList
      sections={sections} // Passando as seções para a SectionList
      keyExtractor={(item, index) => String(item.Handle + index)}
      renderItem={({ item, index }) => (
        <ExceptionLayout
          item={item}
          addQuantidade={() =>
            AdicionarQuantidadeExcecao(indexItem, item.Handle)
          }
          removeQuantidade={() =>
            RemoverQuantidadeExcecao(indexItem, item.Handle)
          }
        />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text weight="700" style={{ marginVertical: 8 }}>
          {"\u2022"}
          {title}
        </Text>
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 8 }}
    />
  );
};

export default Exceptions;
