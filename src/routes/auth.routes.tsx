import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import AcessarApp from "../pages/auth/AcessarApp";
import CadDispositivo from "../pages/auth/CadDispositivo";
import { useTheme } from "styled-components/native";
import { Loading } from "../components/Loading";

export default function AuthRoutes() {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      //initialRouteName="CadDispositivo"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.Primary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="AcessarApp"
        component={AcessarApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CadDispositivo"
        component={CadDispositivo}
        options={{ headerTitle: "Configurações" }}
      />
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
