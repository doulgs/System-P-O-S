import { useNavigation } from "@react-navigation/native";
import {
  Container,
  MenuContainer,
  Footer,
  FooterContainer,
  ContainerHeader,
} from "./styles";

import { Header } from "../../../components/Header";
import { Button } from "../../../components/Button";
import { Empty } from "../../../assets/icons/Empty";
import { realizarSync } from "../../../infra/command/realizarSync";
import { useState } from "react";
import { Loading } from "../../../components/Loading";

const Home = () => {
  const navigation = useNavigation();
  const [isLoading, setisLoading] = useState(false);

  async function Sync() {
    setisLoading(true);
    await realizarSync("SchemaFilial", "Filial");
    await realizarSync("SchemaFormula", "Formula");
    await realizarSync("SchemaGrupo1", "Grupo1");
    await realizarSync("SchemaGrupo2", "Grupo2");
    await realizarSync("SchemaGrupo2Excecao", "Grupo2Excecao");
    await realizarSync("SchemaGrupo3", "Grupo3");
    await realizarSync("SchemaGrupoExcecao", "GrupoExcecao");
    await realizarSync("SchemaItem", "Item");
    await realizarSync("SchemaIteTabFor", "IteTabFor");
    await realizarSync("SchemaTabela", "Tabela");
    await realizarSync("SchemaUnidade", "Unidade");
    setisLoading(false);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        <ContainerHeader>
          <Header realizarSync={() => Sync()} />
        </ContainerHeader>

        <MenuContainer>
          <Empty />
        </MenuContainer>

        <Footer>
          <FooterContainer>
            <Button onPress={() => navigation.navigate("ListaDeGrupo2")}>
              Novo Pedido
            </Button>
          </FooterContainer>
        </Footer>
      </Container>
    </>
  );
};

export default Home;
