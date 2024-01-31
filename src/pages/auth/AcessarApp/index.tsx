import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, ButtonText, Container, ContentInput, Input } from "./styles";
import { useAuth } from "../../../context/authContext";
import { useNavigation } from "@react-navigation/native";

interface credenciaisProps {
  usuario: string;
  senha: string;
}

const AcessarApp = () => {
  const { acessar } = useAuth();
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm<credenciaisProps>();

  const onSubmit = async (data: credenciaisProps) => {
    await acessar(data.usuario, data.senha);
  };
  const handleConfig = () => {
    navigation.navigate("CadDispositivo");
  };

  return (
    <Container>
      <ContentInput>
        <Controller
          name="usuario"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Usuario"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
      </ContentInput>
      <ContentInput>
        <Controller
          name="senha"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input placeholder="Senha" value={value} onChangeText={onChange} />
          )}
        />
      </ContentInput>

      <Button onPress={handleSubmit(onSubmit)}>
        <ButtonText>Acessar</ButtonText>
      </Button>

      <Button onPress={handleConfig}>
        <ButtonText>Config</ButtonText>
      </Button>
    </Container>
  );
};

export default AcessarApp;
