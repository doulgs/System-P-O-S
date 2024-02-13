import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Alert, TouchableOpacity } from "react-native";

import { useCart } from "../context/cartContext";
import { useOrder } from "../context/orderContext";

import Home from "../pages/app/Home";
import ListaDeGrupo2 from "../pages/app/ListaDeGrupo2";
import ListaDeItens from "../pages/app/ListaDeItens";
import Order from "../pages/app/Order";

import { Text } from "../components/Text";
import { More } from "../assets/icons/More";

import { Storefont } from "../assets/icons/Storefont";

const Stack = createNativeStackNavigator();

function AppRoutes() {
  const { colors, colorBase } = useTheme();
  const { order } = useOrder();
  const { cart, ConfirmarCarrinho } = useCart();
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListaDeGrupo2"
        component={ListaDeGrupo2}
        options={{
          headerTintColor: colors.MildScale[50],
          headerTitle: "Selecione um grupo",
          headerStyle: {
            backgroundColor: colors.Primary,
          },
          headerRight: ({}) => {
            return (
              order.length >= 1 && (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Order")}
                  style={{ marginHorizontal: 8 }}
                >
                  <Storefont />
                </TouchableOpacity>
              )
            );
          },
        }}
      />
      <Stack.Screen
        name="ListaDeItens"
        component={ListaDeItens}
        options={{
          headerTintColor: colors.MildScale[50],
          headerTitle: "ITENS",
          headerStyle: {
            backgroundColor: colors.Primary,
          },

          headerRight: ({ tintColor }) => {
            function handleConfirmarItens() {
              if (cart.length !== 0) {
                navigation.navigate("Order");
                ConfirmarCarrinho();
                return;
              }
              Alert.alert("O carrinho esta vazio");
            }
            return (
              cart.length > 0 && (
                <TouchableOpacity
                  onPress={handleConfirmarItens}
                  style={{
                    marginHorizontal: 8,
                    backgroundColor: colorBase.Alert,
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    borderRadius: 8,
                  }}
                >
                  <Text weight="600" color={tintColor}>
                    Confirmar
                  </Text>
                </TouchableOpacity>
              )
            );
          },
        }}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{
          headerTintColor: colors.MildScale[50],
          headerTitle: "Pedido",
          headerStyle: {
            backgroundColor: colors.Primary,
          },
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("ListaDeGrupo2")}
              >
                <More />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
