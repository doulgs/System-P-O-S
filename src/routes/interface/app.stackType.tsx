import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  AcessarApp: undefined;
  CadDispositivo: undefined;

  Home: undefined;
  Order: undefined;
  ListaDeGrupo2: undefined;
  ListaDeItens: { handle: number };
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
