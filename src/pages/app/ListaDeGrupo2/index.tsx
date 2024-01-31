import React from "react";
import { FlatList } from "react-native";
import {
  Codigo,
  Container,
  ContainerGrupo2,
  Img,
  Title,
  Touchable,
} from "./styles";
import { Grupo2, IntGrupo2 } from "../../../mocks/Grupos2";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/interface/app.stackType";

const ListaDeGrupo2 = () => {
  const navigation = useNavigation<propsStack>();
  const renderizarGrupo2 = ({ item: grupo }: { item: IntGrupo2 }) => {
    const imageAPI = grupo?.FotoByte || null;
    const source = imageAPI
      ? { uri: `data:image/jpeg;base64,${imageAPI}` }
      : require("../../../assets/icons/IcoPublisoftLogoDefault.png");
    return (
      <Touchable
        style={{ elevation: 5 }}
        onPress={() =>
          navigation.navigate("ListaDeItens", { handle: grupo.Handle })
        }
      >
        <Codigo>{grupo.Codigo}</Codigo>
        <ContainerGrupo2>
          <Img source={source} resizeMode="contain" />
          <Title numberOfLines={2}>{grupo.Nome}</Title>
        </ContainerGrupo2>
      </Touchable>
    );
  };
  return (
    <>
      <Container>
        <FlatList
          data={Grupo2}
          keyExtractor={(grupo2) => String(grupo2.Handle)}
          renderItem={renderizarGrupo2}
          contentContainerStyle={{ flex: 1, alignItems: "center" }}
          numColumns={3}
        />
      </Container>
    </>
  );
};

export default ListaDeGrupo2;
