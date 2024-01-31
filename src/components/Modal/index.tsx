import { Modal, Platform, TouchableOpacity } from "react-native";
import { Form, Header, Input, ModalBody, Overlay } from "./styles";
import { Text } from "../Text";
import React, { useState } from "react";
import { Button } from "../Button";

interface PedidoModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (cpfCnpj: string) => void;
}

export const PedidoModal = ({ visible, onClose, onSave }: PedidoModalProps) => {
  const [identificarCliente, setIdentificarCliente] = useState("");

  function salvarDadosCliente() {
    onSave(identificarCliente);
    onClose();
    setIdentificarCliente("");
  }
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
            <Text weight="600">Deseja identificar o Cliente?</Text>

            <TouchableOpacity onPress={onClose}>
              <Text weight="600" color="#666">
                X
              </Text>
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder="Digite aqui o CPF ou CNPJ"
              keyboardType="number-pad"
              onChangeText={(t) => setIdentificarCliente(t)}
            />

            <Button onPress={() => salvarDadosCliente()}>Continuar</Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
};
