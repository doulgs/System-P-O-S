import { useNavigation } from "@react-navigation/native";
import { Container, MenuContainer, Footer, FooterContainer } from "./styles";

import { Header } from "../../../components/Header";
import { Button } from "../../../components/Button";
import { Empty } from "../../../assets/icons/Empty";

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <Header />

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
