import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "../../../context/authContext";
import { useNavigation } from "@react-navigation/native";
import { Text } from "../../../components/Text";
import {
  Button,
  ButtonConfig,
  Container,
  ContainerImage,
  ContainerInput,
  ErrorContent,
  Image,
  Input,
} from "./styles";
import { criptografarParaMD5 } from "../../../helpers/utils/criptografarParaMD5";

interface credenciaisProps {
  login: string;
  senha: string;
}

const AcessarApp = () => {
  const { acessar } = useAuth();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<credenciaisProps>({
    resolver: yupResolver(
      yup.object().shape({
        login: yup.string().required("Campo usuario obrigatório"),
        senha: yup.string().required("Campo senha é obrigatória"),
      })
    ),
  });

  const onSubmit = async (data: credenciaisProps) => {
    const senha = await criptografarParaMD5(data.senha);
    const login = data.login;
    await acessar(login, senha);
    console.log("Fim");
  };

  return (
    <Container>
      <ContainerImage>
        <Image
          source={require("../../../assets/images/PublisoftWhite.png")}
          resizeMode="contain"
        />
      </ContainerImage>

      <ContainerInput>
        {errors.login && (
          <ErrorContent>
            <Text color="#e6419e">{errors.login.message}</Text>
          </ErrorContent>
        )}
        <Controller
          name="login"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              autoCorrect={false}
              autoCapitalize={"none"}
              placeholder="Digite seu nome de usuario"
            />
          )}
        />

        {errors.senha && (
          <ErrorContent>
            <Text color="#e6419e">{errors.senha.message}</Text>
          </ErrorContent>
        )}
        <Controller
          name="senha"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              autoCorrect={false}
              autoCapitalize={"none"}
              placeholder="Digite sua Senha"
              secureTextEntry={true}
            />
          )}
        />

        <Button onPress={handleSubmit(onSubmit)}>
          <Text
            color="#fff"
            weight="600"
            style={{ textTransform: "uppercase" }}
          >
            Acessar
          </Text>
        </Button>

        <ButtonConfig onPress={() => navigation.navigate("CadDispositivo")}>
          <Text color="#fff">Configurar empresa</Text>
        </ButtonConfig>
      </ContainerInput>
    </Container>
  );
};

export default AcessarApp;
