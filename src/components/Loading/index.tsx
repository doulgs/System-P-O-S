import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({
  message = "Aguarde, Carregando Dados...",
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size="large" color="#0094D8" />
        {message && <Text style={styles.message}>{message}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(243, 243, 243, 0.8)", // Fundo branco quase todo transparente
  },
  loadingWrapper: {
    width: 300,
    height: 180,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export { Loading };
