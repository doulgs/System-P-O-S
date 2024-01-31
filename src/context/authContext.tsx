import { useState, useContext, createContext, useEffect } from "react";
//import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { cadastrarDispositivoDB } from "../helpers/functions/cadastrarDispositivoDB";
import { getRealm } from "../infra/realm";
import { criptografarParaMD5 } from "../helpers/utils/criptografarParaMD5";
import { gerarHandle } from "../helpers/utils/gerarHandle";

interface AuthContextProps {
  user: UserProps | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isConnectedInternet: boolean | null;
  acessar: Function;
  signOut: Function;

  cadastrarDispositivo: Function;
}

interface UserProps {
  Usuario: string;
  Senha: string;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvaider = ({ children }: any) => {
  const [isConnectedInternet, setIsConnectedInternet] = useState<
    boolean | null
  >(null);

  const [user, setUser] = useState<UserProps | null>(null);
  const [isLoading, setIsLoading] = useState<true | false>(false);

  async function cadastrarDispositivo(chaveEmpresa: string) {
    const realm = await getRealm();
    try {
      const retorno = await cadastrarDispositivoDB(chaveEmpresa);
      await gravarUsuarios(realm, retorno?.Data.Usuarios);
      await gravarFilial(realm, retorno?.Data.Filial);
    } catch (error) {
      console.log("Erro no processo de cadastroDispositivo", error);
    } finally {
      realm.close();
    }
  }

  async function gravarUsuarios(realm: Realm, usuarios: any) {
    if (usuarios) {
      usuarios.forEach((obj: any) => {
        try {
          realm.write(() => {
            const createdUserRealm = realm.create("UserSchema", {
              Handle: obj.Handle,
              Nome: obj.Nome,
              Login: obj.Login,
              Password: obj.Senha,
              Ativo: obj.Vendedor_SowPublisoft,
              EhAdministrador: obj.Role,
              created_at: new Date(),
              updated_at: new Date(),
            });

            console.log(
              "Sync-Usuario",
              `criação do registro do usuario --> ${obj.Login}`
            );
          });
        } catch (error) {
          console.log("Erro na criação do registro de Usuario -->", error);
        }
      });
    }
  }

  async function gravarFilial(realm: Realm, filial: any) {
    try {
      realm.write(() => {
        const createdFilialRealm = realm.create("FilialSchema", {
          Handle: filial.Handle,
          Nome: filial.Nome,
          Razao: filial.Razao,
          Fone: filial.Fone,
          CnpjCpf: filial.CnpjCpf,
          NomeSite: filial.NomeSite,
          Endereco: filial.Endereco,
          Numero: filial.Numero,
          Complemento: filial.Complemento,
          Bairro: filial.Bairro,
          Cep: filial.Cep,
          Cidade: filial.Cidade,
          Estado: filial.Estado,
        });
        console.log("Sync-Filial");
      });
    } catch (error) {
      console.log("Erro na criação do registro de Filial -->", error);
    }
  }

  async function acessar(usuario: string, senha: string) {
    const realm = await getRealm();
    try {
      if (usuario && senha && usuario !== "" && senha !== "") {
        const passwordCrypto = await criptografarParaMD5(senha);
        const response = realm
          .objects("UserSchema")
          .filtered(
            `Login = '${usuario}'`,
            `Password = '${passwordCrypto}'`
          )[0];
        if (response.length !== 0) {
          if (
            passwordCrypto === response.Password &&
            usuario === response.Login
          ) {
            setUser({
              Usuario: response.Login,
              Senha: response.Password,
            });
          }
        }
      }
    } catch (error) {
      console.log("Erro fazer Login", error);
    } finally {
      realm.close();
    }
  }

  // async function cadastarPessoaDB(
  //   dados: FormCadClienteProps,
  //   tipoSelecionado: TipoCliente
  // ) {
  //   setIsLoading(true);
  //   const MyHandle = await gerarHandle("PessoasSchema");
  //   const realm = await getRealm();
  //   try {
  //     realm.write(() => {
  //       const createdPessoaRealm = realm.create("PessoasSchema", {
  //         Handle: MyHandle,
  //         Nome: dados?.Nome,
  //         Fantasia: dados?.Fantasia,
  //         CnpjCpf: dados?.CnpjCpf,
  //         Insc: dados?.Insc,
  //         Endereco: dados?.Endereco,
  //         Numero: parseInt(dados?.Numero),
  //         Bairro: dados?.Bairro,
  //         Cep: dados?.CEP,
  //         Cidade: dados?.Cidade,
  //         Email: dados?.Email,
  //         Telefone: dados?.Telefone,
  //         Observacao: dados?.Observacao,
  //         Uf: dados?.UF,
  //         Tipo: tipoSelecionado,
  //       });
  //     });
  //     console.log("Pessoa Registrada com sucesso");
  //   } catch (error) {
  //     console.log("Erro na criação do registro de Usuario -->", error);
  //     setIsLoading(false);
  //   }
  //   setIsLoading(false);
  // }

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
