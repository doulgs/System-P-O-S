import { getRealm } from "../infra/realm";
import { useState, useContext, createContext, useEffect } from "react";
//import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { cadastrarDispositivoDB } from "../helpers/functions/cadastrarDispositivoDB";
import { criptografarParaMD5 } from "../helpers/utils/criptografarParaMD5";
import { gerarHandle } from "../helpers/utils/gerarHandle";
import {
  Usuario,
  UsuarioObject,
} from "../database/interfaces/Interface-Usuario";
import { Filial } from "../database/interfaces/Interface-Filial";
import { Alert } from "react-native";

interface AuthContextProps {
  user: UsuarioProp | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isConnectedInternet: boolean | null;
  acessar: Function;
  signOut: Function;

  cadastrarDispositivo: Function;
}

interface UsuarioProp {
  Login: string | null | undefined;
  Senha: string | null | undefined;
  NomeSite: string | null | undefined;
  NomeEmpresa: string | null | undefined;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvaider = ({ children }: any) => {
  const [isConnectedInternet, setIsConnectedInternet] = useState<
    boolean | null
  >(null);

  const [user, setUser] = useState<UsuarioProp | null>(null);
  const [isLoading, setIsLoading] = useState<true | false>(false);

  async function cadastrarDispositivo(chaveEmpresa: string) {
    const realm = await getRealm();
    try {
      const retorno = await cadastrarDispositivoDB(chaveEmpresa);

      //Verifica se o aparelho já esta registrado no Banco de Dados Web
      if (retorno?.Message === "Aparelho já registrado na base de dados!") {
        Alert.alert("Informações", `${retorno?.Message}`, [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
        return;
      }

      await gravarUsuarios(realm, retorno?.Data.Usuarios);
      await gravarFilial(realm, retorno?.Data.Filial);
    } catch (error) {
      console.log("Erro no processo de cadastroDispositivo", error);
    } finally {
      realm.close();
    }
  }

  async function gravarUsuarios(realm: Realm, usuarios: Usuario[]) {
    if (usuarios) {
      usuarios.forEach((usuarioApi: Usuario) => {
        try {
          realm.write(() => {
            const createdUserRealm = realm.create<UsuarioObject>(
              "SchemaUsuario",
              usuarioApi,
              Realm.UpdateMode.Modified
            );

            console.log(
              "Sync-Usuario",
              `Usuario Recuperado da Api --> ${usuarioApi.Nome}`
            );
          });
        } catch (error) {
          console.log(
            "Sync-Usuario",
            `Erro ao Recuperado Usuario da Api --> ${usuarioApi.Nome} - ${error}`
          );
        }
      });
    }
  }

  async function gravarFilial(realm: Realm, filial: Filial) {
    try {
      realm.write(() => {
        const createdFilialRealm = realm.create(
          "SchemaFilial",
          filial,
          Realm.UpdateMode.Modified
        );
        console.log(
          "Sync-Filial",
          `Filial Recuperada da Api --> ${filial.Nome}`
        );
        Alert.alert(
          "Informações",
          ` As informações da empresa ${filial.Nome} foram sincronizadas com sucesso`,
          [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );
      });
    } catch (error) {
      console.log("Erro na criação do registro de Filial -->", error);
    }
  }

  async function acessar(login: string, senha: string) {
    const realm = await getRealm();
    console.log(login, senha);
    try {
      const response = realm
        .objects<Usuario>("SchemaUsuario")
        .filtered(`Login = '${login}'`, `Senha = '${senha}'`)[0];
      console.log(response);
      if (response) {
        setUser({
          Login: response.Login,
          Senha: response.Senha,
          NomeSite: response.Filial?.NomeSite,
          NomeEmpresa: response.Filial?.Nome,
        });
      }
    } catch (error) {
      console.log("Erro fazer Login", error);
    } finally {
      realm.close();
    }
  }

  async function signOut() {
    setUser(null);
  }

  // useEffect(() => {
  //   const handleConnectivityChange = (state: NetInfoState) => {
  //     console.log("Connection type", state.type);
  //     console.log("Is connected?", state.isConnected);
  //     setIsConnectedInternet(state.isConnected);
  //   };
  //   const unsubscribe = NetInfo.addEventListener(handleConnectivityChange);

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);
  return (
    <AuthContext.Provider
      value={{
        isConnectedInternet,
        acessar,
        user,
        isAuthenticated: !!user,
        isLoading,
        signOut,

        cadastrarDispositivo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
