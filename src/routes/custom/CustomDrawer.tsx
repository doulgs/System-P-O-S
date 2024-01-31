import * as React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, StyleSheet, Linking, Text, StatusBar } from "react-native";
import { Avatar, Title, Caption, Switch } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { useAuth } from "../../context/authContext";

type CustomDrawerProps = DrawerContentComponentProps;

const statusBarHeight = StatusBar.currentHeight;

const CustomDrawer: React.FC<CustomDrawerProps> = (props) => {
  const { colors, colorBase } = useTheme();
  const { user, signOut, isConnectedInternet } = useAuth();
  return (
    <View style={{ flex: 1, backgroundColor: colors.Primary }}>
      <DrawerContentScrollView style={styles.headerDrawerSection} {...props}>
        <View style={styles.bodyDrawerSection}>
          <View style={styles.drawerContent}>
            <View
              style={[
                styles.userInfoSection,
                { backgroundColor: colors.Primary },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 15,
                  marginBottom: 15,
                }}
              >
                <Avatar.Image
                  style={{ backgroundColor: colors.Primary }}
                  source={require("../../assets/images/UserPublisoft.png")}
                  size={50}
                />
                <View style={{ marginLeft: 15, flexDirection: "column" }}>
                  <Title style={styles.title}>{user?.Usuario}</Title>
                  <Caption style={styles.caption}>@Publisoft</Caption>
                </View>
              </View>
            </View>

            <View style={styles.drawerSection}>
              <Text style={styles.menuTitleDrawer}>Menu Principal</Text>
              <DrawerItem
                style={styles.itemMenuStyle}
                icon={({ color, size }) => (
                  <MaterialCommunityIcons
                    name="format-list-text"
                    color={color}
                    size={size}
                  />
                )}
                label="Pedidos"
                onPress={() => {
                  props.navigation.navigate("ListaPedidos");
                }}
              />
              <DrawerItem
                style={styles.itemMenuStyle}
                icon={({ color, size }) => (
                  <MaterialCommunityIcons
                    name="account-details-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Clientes"
                onPress={() => {
                  props.navigation.navigate("ListaPessoas");
                }}
              />
              <DrawerItem
                style={styles.itemMenuStyle}
                icon={({ color, size }) => (
                  <MaterialCommunityIcons
                    name="bookmark-box-multiple-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Produtos"
                onPress={() => {
                  props.navigation.navigate("ListaGrupo2");
                }}
              />
            </View>

            <View style={styles.drawerSection}>
              <Text style={styles.menuTitleDrawer}>Menu de Ações</Text>
              <DrawerItem
                style={styles.itemMenuStyle}
                icon={({ color, size }) => (
                  <MaterialCommunityIcons
                    name="clipboard-edit-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Adiocionar Pedido"
                onPress={() => {
                  props.navigation.navigate("AdicionarPedido");
                }}
              />
              <DrawerItem
                style={styles.itemMenuStyle}
                icon={({ color, size }) => (
                  <MaterialCommunityIcons
                    name="account-multiple"
                    color={color}
                    size={size}
                  />
                )}
                label="Adicionar Pessoa"
                onPress={() => {
                  props.navigation.navigate("AdicionarPessoa");
                }}
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>

      <View style={styles.footerDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name={isConnectedInternet ? "wifi" : "wifi-cancel"}
              color={isConnectedInternet ? colorBase.Success : colorBase.Error}
              size={size}
            />
          )}
          label="Status de Conexão"
          onPress={() => {}}
        />
      </View>
      <View style={styles.footerDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="robot-confused-outline"
              color={color}
              size={size}
            />
          )}
          label="Suporte"
          onPress={() =>
            Linking.openURL(
              "https://api.whatsapp.com/send/?phone=5544997721110&text=Ol%C3%A1,%20estou%20utilizando%20o%20Aplicativo%20PubliVendas%20e%20estou%20com%20algumas%20d%C3%BAvidas/erros,%20gostaria%20de%20iniciar%20um%20atendimento%20com%20o%20suporte%20da%20Publisoft"
            )
          }
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="database-sync-outline"
              color={color}
              size={size}
            />
          )}
          label="Forçar Sync"
          onPress={() => {}}
          // onPress={() => dispararSync()}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Sair da aplicação"
          onPress={() => signOut()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerDrawerSection: {
    flex: 1,
    marginTop: statusBarHeight,
    backgroundColor: "#f0f4ff",
  },
  bodyDrawerSection: {
    flex: 1,
    marginTop: -38,
  },
  menuTitleDrawer: {
    padding: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  footerDrawerSection: {
    backgroundColor: "#f0f4ff",
    borderTopColor: "#dadada",
    borderTopWidth: 1,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: "#f0f4ff",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: "#dadada",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 8,
  },
  itemMenuStyle: {
    backgroundColor: "#cfd2e4",
  },
  itemTextMenuStyle: {},
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f0f4ff",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export { CustomDrawer };
