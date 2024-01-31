import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  AcessarApp: undefined;
  CadDispositivo: undefined;

  Home: undefined;
  //ListaItens: { handle: number };
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
