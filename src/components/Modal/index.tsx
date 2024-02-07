import React, { useState } from "react";
import { FlatList, Modal, Platform, TouchableOpacity } from "react-native";
import {
  Action,
  ActionQuantidade,
  ButtonAction,
  Container,
  ContentAction,
  ContentInfo,
  Form,
  FormBody,
  FormFooter,
  Header,
  Input,
  ModalBody,
  Overlay,
} from "./styles";
import { Text } from "../Text";
import { Button } from "../Button";
import { Grupo2Excecao } from "../../database/interfaces/Interface-Grupo2Excecao";
import { formatarParaMoeda } from "../../helpers/utils/formatarParaMoeda";
import { IconTrash } from "../../assets/icons/Icon-Trash";
import { Checkbox } from "../Checkbox";

interface ExcecoesModalProps {
  visible: boolean;
  onClose: () => void;
  data: Grupo2Excecao[];
}

export const ExcecoesModal = ({
  visible,
  onClose,
  data,
}: ExcecoesModalProps) => {
  const rendezirarExcecoes = ({ item: excecao }: { item: Grupo2Excecao }) => {
    return (
      <>
        <Container>
          <ContentInfo>
            <Text style={{ maxWidth: "80%" }}>{excecao?.Excecao}</Text>
            <Checkbox />
          </ContentInfo>

          <ContentAction>
            <ActionQuantidade>
              <ButtonAction onPress={() => {}}>
                <Text color="#fff" weight="600">
                  -
                </Text>
              </ButtonAction>
              <Text weight="700">{excecao.Amount ?? 0}</Text>
              <ButtonAction onPress={() => {}}>
                <Text color="#fff" weight="600">
                  +
                </Text>
              </ButtonAction>
            </ActionQuantidade>
            <Text weight="600">{formatarParaMoeda(excecao?.Valor ?? 0)}</Text>
          </ContentAction>
        </Container>
      </>
    );
  };

  return (
    <Modal
      transparent
      statusBarTranslucent
      animationType="fade"
      visible={visible}
    >
      <Overlay
        enabled
        behavior={Platform.OS === "android" ? "height" : "padding"}
      >
        <ModalBody>
          <Header>
            <Text weight="600">Exceções do Item</Text>

            <TouchableOpacity
              onPress={onClose}
              style={{
                padding: 8,
              }}
            >
              <Text weight="600" color="#666">
                X
              </Text>
            </TouchableOpacity>
          </Header>
          <Form>
            <FormBody>
              <FlatList
                data={data}
                keyExtractor={(item) => String(item.Handle)}
                renderItem={rendezirarExcecoes}
              />
            </FormBody>
            <FormFooter>
              <Button onPress={() => {}}>Salvar Alterações</Button>
            </FormFooter>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
};
