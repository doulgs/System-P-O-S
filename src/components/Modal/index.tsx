import React, { useState } from "react";
import { Modal, Platform, TouchableOpacity } from "react-native";
import {
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

interface ExcecoesModalProps {
  visible: boolean;
  onClose: () => void;
}

export const ExcecoesModal = ({ visible, onClose }: ExcecoesModalProps) => {
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
            <FormBody></FormBody>
            <FormFooter>
              <Button onPress={() => {}}>Salvar Alterações</Button>
            </FormFooter>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
};
