import React from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import { THEME } from "./src/theme";

import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

import { AuthProvaider } from "./src/context/authContext";
import { OrderProvaider } from "./src/context/orderContext";
import { CartProvider } from "./src/context/cartContext";
import { Loading } from "./src/components/Loading";

import { Text } from "react-native";

export default function App() {
  const [isFontsLoaded] = useFonts({
    "GeneralSans-400": require("./src/assets/fonts/GeneralSans-Regular.otf"),
    "GeneralSans-600": require("./src/assets/fonts/GeneralSans-Semibold.otf"),
    "GeneralSans-700": require("./src/assets/fonts/GeneralSans-Bold.otf"),
  });

  if (!isFontsLoaded) {
    return <Loading />;
  }

  const linking = {
    prefixes: ["linkpublipos://"],
    config: {
      screens: {
        Home: { path: "Home" },
        ListaDeGrupo2: { path: "ListaDeGrupo2" },
        ListaDeItens: { path: "ListaDeItens" },
        Order: { path: "Order" },
        Exceptions: { path: "Exceptions" },
        Payment: { path: "Payment" },
        Sales: { path: "Sales" },
        AcessarApp: { path: "AcessarApp" },
        CadDispositivo: { path: "CadDispositivo" },
      },
    },
  };

  return (
    <ThemeProvider theme={THEME}>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <AuthProvaider>
          <OrderProvaider>
            <CartProvider>
              <StatusBar style="light" />
              <Routes />
            </CartProvider>
          </OrderProvaider>
        </AuthProvaider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
