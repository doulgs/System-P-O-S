import { Text } from "../Text";
import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Text weight="600">Bem Vindo(a) ao</Text>
      <Text size={24} weight="700">
        PUBLI {""}
        <Text size={24}>P.O.S</Text>
      </Text>
    </Container>
  );
};
