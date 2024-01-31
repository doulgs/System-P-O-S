import React, { useState } from "react";
import {
  Container,
  CategoryContainer,
  MenuContainer,
  Footer,
  FooterContainer,
} from "./styles";

import { Header } from "../../../components/Header";
import { Categories } from "../../../components/Categories";
import { Menu } from "../../../components/Menu";
import { Button } from "../../../components/Button";
import { PedidoModal } from "../../../components/Modal";

const Main = () => {
  const [visibleModalPedido, setVisibleModalPedido] = useState(false);
  function handleSave(cpfCnpj: string) {
    alert(`"save", ${cpfCnpj}`);
  }
  return (
    <>
      <Container>
        <Header />

        <CategoryContainer>
          <Categories />
        </CategoryContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
        <Footer>
          <FooterContainer>
            <Button onPress={() => setVisibleModalPedido(!visibleModalPedido)}>
              Novo Pedido
            </Button>
          </FooterContainer>
        </Footer>
      </Container>

      <PedidoModal
        visible={visibleModalPedido}
        onClose={() => setVisibleModalPedido(false)}
        onSave={handleSave}
      />
    </>
  );
};

export default Main;
