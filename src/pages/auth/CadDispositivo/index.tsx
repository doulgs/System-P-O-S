import React, { useState, useEffect } from "react";
import {
  Container,
  Input,
  ContentLine,
  Title,
  SubTitle,
  ContentButton,
} from "./styles";
import {
  InfoDispositivoProps,
  obterInfoDispositivo,
} from "../../../helpers/obterInfoDispositivo";
import { useAuth } from "../../../context/authContext";
import { Keyboard } from "react-native";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";

const CadDispositivo: React.FC = () => {
  const { cadastrarDispositivo } = useAuth();
  const [chaveAtivacao, setChaveAtivacao] = useState("");
  const [dispositivoInfo, setDispositivoInfo] =
    useState<InfoDispositivoProps | null>(null);

  async function handleSubmit() {
    Keyboard.dismiss();
    await cadastrarDispositivo(chaveAtivacao);
    setChaveAtivacao("");
  }

  useEffect(() => {
    const recuperarInfoDispositivo = async () => {
      try {
        const dispositivo = await obterInfoDispositivo();
        if (dispositivo && dispositivo.infoDispositivo) {
          setDispositivoInfo(dispositivo.infoDispositivo);
        } else {
          console.error("Nenhuma informação do dispositivo disponível.");
        }
      } catch (error) {
        console.error("Erro ao recuperar informações do dispositivo:", error);
      }
    };

    recuperarInfoDispositivo();
  }, []);

  return (
    <Container>
      <Input
        autoCapitalize="none"
        placeholder="Chave de Ativação da Empresa"
        value={chaveAtivacao}
        onChangeText={(t) => setChaveAtivacao(t)}
      />
      <ContentLine>
        <Title>UUID:</Title>
        <SubTitle>{dispositivoInfo?.uniqueId || "Carregando..."}</SubTitle>
      </ContentLine>
      <ContentLine>
        <Title>Modelo:</Title>
        <SubTitle>{dispositivoInfo?.Modelo || "Carregando..."}</SubTitle>
      </ContentLine>
      <ContentLine>
        <Title>Plataforma:</Title>
        <SubTitle>{dispositivoInfo?.Plataforma || "Carregando..."}</SubTitle>
      </ContentLine>
      <ContentLine>
        <Title>Versão:</Title>
        <SubTitle>{dispositivoInfo?.Versao || "Carregando..."}</SubTitle>
      </ContentLine>

      <ContentButton>
        <Button onPress={handleSubmit}>
          <Text color="#FFF">Cadastrar</Text>
        </Button>
      </ContentButton>
      <ContentButton>
        <Button onPress={() => {}}>
          <Text color="#FFF">Limpar Base</Text>
        </Button>
      </ContentButton>
    </Container>
  );
};

export default CadDispositivo;
