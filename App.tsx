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
import { CartProvaider } from "./src/context/cartContext";

export default function App() {
  const [isFontsLoaded] = useFonts({
    "GeneralSans-400": require("./src/assets/fonts/GeneralSans-Regular.otf"),
    "GeneralSans-600": require("./src/assets/fonts/GeneralSans-Semibold.otf"),
    "GeneralSans-700": require("./src/assets/fonts/GeneralSans-Bold.otf"),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={THEME}>
      <NavigationContainer>
        <AuthProvaider>
          <CartProvaider>
            <StatusBar style="dark" />
            <Routes />
          </CartProvaider>
        </AuthProvaider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
