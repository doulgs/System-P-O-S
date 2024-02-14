import { Text } from "../Text";
import { useAuth } from "../../context/authContext";
import { Action, Container, Content, ContentAction } from "./styles";

import { SignOut } from "../../assets/icons/SignOut";
import { SyncIcon } from "../../assets/icons/Sync";

interface HeaderProps {
  realizarSync: Function;
}

export const Header = ({ realizarSync }: HeaderProps) => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Content>
        <Text weight="600">
          Bem Vindo{" "}
          <Text weight="600" style={{ textTransform: "capitalize" }}>
            {user?.Login}
          </Text>
        </Text>
        <Text size={24} weight="700">
          PUBLI {""}
          <Text size={24}>P.O.S</Text>
        </Text>
      </Content>

      <ContentAction>
        <Action onPress={() => realizarSync()}>
          <SyncIcon />
        </Action>
        <Action onPress={() => signOut()}>
          <SignOut />
        </Action>
      </ContentAction>
    </Container>
  );
};
