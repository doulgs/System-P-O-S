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
    // Tem que manter nessa ordem
    setisLoading(true);
    console.log("Inicio do Sync");
    await realizarSync("SchemaFilial", "Filial");
    await realizarSync("SchemaGrupo1", "Grupo1");
    await realizarSync("SchemaGrupoExcecao", "GrupoExcecao");
    await realizarSync("SchemaGrupo2Excecao", "Grupo2Excecao");
    await realizarSync("SchemaGrupo3", "Grupo3");
    await realizarSync("SchemaItem", "Item");
    await realizarSync("SchemaTabela", "Tabela");
    await realizarSync("SchemaGrupo2", "Grupo2");
    await realizarSync("SchemaUnidade", "Unidade");
    await realizarSync("SchemaFormula", "Formula");
    await realizarSync("SchemaIteTabFor", "IteTabFor");
    console.log("Fim do Sync");
    setisLoading(false);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        <ContainerHeader>
          <Header realizarSync={Sync} />
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
