import React, { useCallback, useState } from "react";
import { getRealm } from "../../../infra/realm";
import { useFocusEffect } from "@react-navigation/native";
import { FlatList } from "react-native";

import { Pedido } from "../../../database/interfaces/Interface-Pedido";

import { Text } from "../../../components/Text";

import { Box, Container, Content } from "./styles";
import { formatarParaMoeda } from "../../../helpers/utils/formatarParaMoeda";

const Sales: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  useFocusEffect(
    useCallback(() => {
      const recuperarPedidos = async () => {
        setLoading(true);
        const realm = await getRealm();
        try {
          const result = realm.objects<Pedido>("SchemaPedido");

          // Converta o resultado em um array e atualize o estado
          setPedidos(Array.from(result));
          setLoading(false);
        } catch (error) {
          console.error("Erro ao realizar a consulta dos pedidos:", error);
          setLoading(false);
        }
      };
      recuperarPedidos();
    }, [])
  );

  return (
    <Container>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          inverted
          data={pedidos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Content>
              <Box>
                <Text weight="600">Pedido: {item.Handle}</Text>
                <Text size={12}>
                  Status do pagamento: {item.StatusPagamento}
                </Text>
              </Box>
              <Box>
                <Text weight="600">Total: {formatarParaMoeda(item.Total)}</Text>
              </Box>
            </Content>
          )}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
        />
      )}
    </Container>
  );
};

export default Sales;
