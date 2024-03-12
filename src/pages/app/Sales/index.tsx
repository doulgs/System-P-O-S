// import React, { useCallback, useState } from "react";
// import { getRealm } from "../../../infra/realm";
// import { useFocusEffect } from "@react-navigation/native";
// import { FlatList } from "react-native";

// import { Pedido } from "../../../database/interfaces/Interface-Pedido";

// import { Text } from "../../../components/Text";

// import { Box, Container, Content } from "./styles";
// import { formatarParaMoeda } from "../../../helpers/utils/formatarParaMoeda";

// const Sales: React.FC = () => {
//   const [loading, setLoading] = useState(false);
//   const [pedidos, setPedidos] = useState<Pedido[]>([]);

//   useFocusEffect(
//     useCallback(() => {
//       const recuperarPedidos = async () => {
//         setLoading(true);
//         const realm = await getRealm();
//         try {
//           const result = realm.objects<Pedido>("SchemaPedido");

//           // Converta o resultado em um array e atualize o estado
//           setPedidos(Array.from(result));
//           setLoading(false);
//         } catch (error) {
//           console.error("Erro ao realizar a consulta dos pedidos:", error);
//           setLoading(false);
//         }
//       };
//       recuperarPedidos();
//     }, [])
//   );

//   return (
//     <Container>
//       {loading ? (
//         <Text>Carregando...</Text>
//       ) : (
//         <FlatList
//           inverted
//           data={pedidos}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({ item }) => (
//             <Content>
//               <Box>
//                 <Text weight="600">Pedido: {item.Handle}</Text>
//                 <Text size={12}>
//                   Status do pagamento: {item.StatusPagamento}
//                 </Text>
//               </Box>
//               <Box>
//                 <Text weight="600">Total: {formatarParaMoeda(item.Total)}</Text>
//               </Box>
//             </Content>
//           )}
//           contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
//         />
//       )}
//     </Container>
//   );
// };

// export default Sales;

import React, { useState, useCallback } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

// Definindo o tipo para os dados da lista
interface ListItem {
  key: string;
}

// Dados de exemplo
const initialData: ListItem[] = Array.from({ length: 1000 }, (_, i) => ({
  key: `${i}`,
}));

// Componente para renderizar cada item da lista
interface ItemProps {
  title: string;
}

const Item: React.FC<ItemProps> = ({ title }) => (
  <View style={styles.item}>
    <Text>{title}</Text>
  </View>
);

const Sales: React.FC = () => {
  const [data, setData] = useState<ListItem[]>(initialData);
  const [loading, setLoading] = useState<boolean>(false);

  // Função para renderizar cada item da lista
  const renderItem = ({ item }: { item: ListItem }) => (
    <Item title={item.key} />
  );

  // Função para carregar mais dados quando o usuário chega ao final da lista
  const handleLoadMore = useCallback(() => {
    setLoading(true); // Inicia o indicador de carregamento
    // Simulando o carregamento de mais dados
    const newData = Array.from({ length: 1000 }, (_, i) => ({
      key: `${data.length + i}`,
    }));
    setTimeout(() => {
      setData([...data, ...newData]);
      setLoading(false); // Finaliza o indicador de carregamento
    }, 1000); // Simula um atraso de 1 segundo
  }, [data]);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={10}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={1}
      ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
      style={styles.container}
    />
  );
};

// Estilos para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default Sales;
