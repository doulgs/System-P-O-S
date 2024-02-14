import React from "react";
import { Modal, Platform, SectionList, View } from "react-native";
import { Text } from "../Text";
import { Grupo2Excecao } from "../../database/interfaces/Interface-Grupo2Excecao";
import {
  Overlay,
  ModalBody,
  Header,
  Body,
  Footer,
  ContainerX,
  Title,
} from "./styles";
import { Button } from "../Button";
import {
  ContentEx,
  HeaderEx,
  CheckBooxEx,
  FooterEx,
  ActionEx,
  ActionLeftEx,
  ActionViewEx,
  ActionRightEx,
} from "./stylesEx";
import { formatarParaMoeda } from "../../helpers/utils/formatarParaMoeda";
import { CheckIcon } from "../../assets/icons/Icon-Check";

interface ExcecoesModalProps {
  visible: boolean;
  onClose: () => void;
  data: Grupo2Excecao[];
}

function renderizarItems({ item }: { item: Grupo2Excecao }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
        borderWidth: 0.4,
        padding: 8,
        borderRadius: 8,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <CheckBooxEx onPress={() => {}}>
          {item?.Amount >= 1 && <CheckIcon />}
        </CheckBooxEx>
        <View style={{ flex: 1 }}>
          <Text weight="700" numberOfLines={2} style={{ maxWidth: "90%" }}>
            {item?.Excecao}
          </Text>
          <Text weight="400">{formatarParaMoeda(item?.Valor ?? 0)}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <ActionEx>
          <ActionLeftEx onPress={() => {}}>
            <Text color="#fff" size={28}>
              -
            </Text>
          </ActionLeftEx>
          <ActionViewEx>
            <Text weight="600">{0}</Text>
          </ActionViewEx>
          <ActionRightEx onPress={() => {}}>
            <Text color="#fff" size={28}>
              +
            </Text>
          </ActionRightEx>
        </ActionEx>
      </View>
    </View>
  );
}

const ExcecoesModal = ({ visible, onClose, data }: ExcecoesModalProps) => {
  // Agrupando as exceções com base no Grupo2
  const agruparExcecoes: { [key: string]: Grupo2Excecao[] } = data.reduce(
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
    <Modal
      transparent
      statusBarTranslucent
      animationType="none"
      visible={visible}
    >
      <Overlay
        enabled
        behavior={Platform.OS === "android" ? "height" : "padding"}
      >
        <ModalBody>
          <Header>
            <Text weight="600" size={18}>
              Exceções & Adicionais
            </Text>
            <ContainerX onPress={onClose}>
              <Text weight="700">X</Text>
            </ContainerX>
          </Header>
          <Body>
            <SectionList
              sections={sections} // Passando as seções para a SectionList
              keyExtractor={(item, index) => String(item.Handle + index)}
              renderItem={renderizarItems}
              renderSectionHeader={({ section: { title } }) => (
                <Title>
                  <Text weight="700">
                    {"\u2022"}
                    {title}
                  </Text>
                </Title>
              )}
              showsVerticalScrollIndicator={false}
            />
          </Body>
          <Footer>
            <Button onPress={() => {}}>
              <Text weight="600" color="#FFF">
                Salvar Alterações
              </Text>
            </Button>
          </Footer>
        </ModalBody>
      </Overlay>
    </Modal>
  );
};

export default ExcecoesModal;
