import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { TouchableOpacity, View } from "react-native";

import Home from "../pages/app/Home";
import Cart from "../pages/app/Cart";
import ListaDeGrupo2 from "../pages/app/ListaDeGrupo2";

import { More } from "../assets/icons/More";
import ListaDeItens from "../pages/app/ListaDeItens";
import { Storefont } from "../assets/icons/Storefont";
import { Text } from "../components/Text";
import { useCart } from "../context/cartContext";

const Stack = createNativeStackNavigator();

function AppRoutes() {
  const { colors, colorBase } = useTheme();
  const { ConfirmarItens } = useCart();
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

          /*  headerRight: ({}) => {
            return (
              cart.length >= 1 && (
                <View style={{ marginHorizontal: 8 }}>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      width: 20,
                      height: 20,
                      borderRadius: 20,
                      backgroundColor: colors.MildScale[50],
                      position: "absolute",
                      zIndex: 99,
                      right: -10,
                      top: -10,
                    }}
                  >
                    <Text weight="600">{cartDot}</Text>
                  </View>
                  <Storefont />
                </View>
              )
            );
          }, */
          headerRight: ({ tintColor }) => {
            return (
              //cart.length >= 1 && (
              <TouchableOpacity
                onPress={() => ConfirmarItens()}
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
              //)
            );
          },
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
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
