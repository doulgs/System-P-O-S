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
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/interface/app.stackType";
import { Grupo2 } from "../../../database/interfaces/Interface-Grupo2";
import { getRealm } from "../../../infra/realm";
import { useCart } from "../../../context/cartContext";

const ListaDeGrupo2 = () => {
  const navigation = useNavigation<propsStack>();
  const [grupo2, setGrupo2] = React.useState<Grupo2[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const recuperarGrupo2 = async () => {
        const realm = await getRealm();
        try {
          const result = realm.objects<Grupo2>("SchemaGrupo2").sorted("Codigo");
          setGrupo2(Array.from(result));
        } catch (error) {
          console.error("Error fetching Grupo2 objects:", error);
        }
      };
      recuperarGrupo2();
    }, [])
  );

  const renderizarGrupo2 = ({ item }: { item: Grupo2 }) => {
    const imageAPI = item?.FotoBase64 || null;
    const source = imageAPI
      ? { uri: `data:image/jpeg;base64,${imageAPI}` }
      : require("../../../assets/icons/IcoPublisoftLogoDefault.png");
    return (
      <Touchable
        onPress={() =>
          navigation.navigate("ListaDeItens", { handle: item.Handle })
        }
      >
        <Codigo>{item.Codigo}</Codigo>
        <ContainerGrupo2>
          <Img source={source} resizeMode="cover" />
          <Title numberOfLines={2}>{item.Nome}</Title>
        </ContainerGrupo2>
      </Touchable>
    );
  };
  return (
    <>
      <Container>
        <FlatList
          data={grupo2}
          keyExtractor={(item, index) => String(item.Handle + index)}
          renderItem={renderizarGrupo2}
          contentContainerStyle={{ alignItems: "center" }}
          numColumns={3}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </>
  );
};

export default ListaDeGrupo2;
