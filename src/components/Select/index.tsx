import React, { useState } from "react";
import { Modal, FlatList } from "react-native";

import { CondicoesDePagamentoProps } from "../../helpers/condicoesDePagamento";

import { IconCaretUpDown } from "../../assets/icons/Icon-caret-up-down";
import { Text } from "../Text";
import {
  Container,
  ContainerModal,
  HeaderModal,
  BodyModal,
  ButtonClose,
  Touchable,
  Box,
} from "./styles";
import { CheckIcon } from "../../assets/icons/Icon-Check";

type SelectProps = {
  text: string;
  optins: CondicoesDePagamentoProps[];
  onChangeSelect: (item: CondicoesDePagamentoProps) => void;
};

export const Select: React.FC<SelectProps> = ({
  optins,
  onChangeSelect,
  text,
}) => {
  const [txt, setTxt] = useState(text);
  const [modalVisible, setModalVisible] = useState(false);

  function rendezirarLista({ item }: { item: CondicoesDePagamentoProps }) {
    return (
      <Touchable
        onPress={() => {
          setTxt(item.description);
          onChangeSelect(item);
          setModalVisible(false);
        }}
      >
        <Text weight="600">{item.description}</Text>
        <Box>{txt === item.description && <CheckIcon />}</Box>
      </Touchable>
    );
  }

  return (
    <>
      <Container onPress={() => setModalVisible(true)}>
        <Text numberOfLines={1}>{txt}</Text>
        <IconCaretUpDown />
      </Container>

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ContainerModal>
          <HeaderModal>
            <Text weight="700" color="#FFF">
              FORMAS DE PAGAMENTO
            </Text>
            <ButtonClose onPress={() => setModalVisible(false)}>
              <Text weight="700" size={26} color="#FFF">
                x
              </Text>
            </ButtonClose>
          </HeaderModal>

          <BodyModal>
            <FlatList
              data={optins}
              keyExtractor={(item) => String(item.Handle)}
              renderItem={rendezirarLista}
            />
          </BodyModal>
        </ContainerModal>
      </Modal>
    </>
  );
};
