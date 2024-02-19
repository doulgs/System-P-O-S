import { useContext, createContext, useReducer } from "react";

import { useOrder } from "./orderContext";
import { Item } from "../database/interfaces/Interface-Item";

interface CartContextProps {
  cart: Item[];
  Adicionar: (novosItem: Item[]) => void;
  AdicionarQuantidade: (indexItem: number) => void;
  RemoverQuantidade: (indexItem: number) => void;
  LimparCarrinho: () => void;
  ConfirmarCarrinho: () => void;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

const initialState: Item[] = [];

type Action =
  | { type: "adicionar"; items: Item[] }
  | { type: "adicionarQuantidade"; selectedItemIndex: number }
  | { type: "removerQuantidade"; selectedItemIndex: number }
  | { type: "limparCarrinho" };

function reducer(cart: Item[], action: Action) {
  switch (action.type) {
    case "adicionar":
      return [
        ...cart,
        ...action.items.map((item) => ({
          ...item,
          Amount: 0,
          Total: item.VendaValor ?? 0,
        })),
      ];
    case "adicionarQuantidade":
      return cart.map((item, index) => {
        if (index === action.selectedItemIndex) {
          return {
            ...item,
            Amount: item.Amount + 1,
          };
        }
        return item;
      });
    case "removerQuantidade":
      return cart.map((item, index) => {
        if (index === action.selectedItemIndex && item.Amount > 0) {
          return {
            ...item,
            Amount: item.Amount - 1,
          };
        }
        return item;
      });
    case "limparCarrinho":
      return [];
  }
}

export const CartProvider = ({ children }: any) => {
  const [cart, dispatch] = useReducer(reducer, initialState);
  const { AdicionarItems } = useOrder();

  function Adicionar(novosItens: Item[]) {
    dispatch({ type: "adicionar", items: novosItens });
  }
  function AdicionarQuantidade(indexItem: number) {
    dispatch({ type: "adicionarQuantidade", selectedItemIndex: indexItem });
  }
  function RemoverQuantidade(indexItem: number) {
    dispatch({ type: "removerQuantidade", selectedItemIndex: indexItem });
  }
  function LimparCarrinho() {
    dispatch({ type: "limparCarrinho" });
  }
  function ConfirmarCarrinho() {
    const itemsParaAdicionar = cart.filter((item) => item.Amount >= 1);
    AdicionarItems(itemsParaAdicionar); // Passa apenas os itens com quantidade maior ou igual a 1
    LimparCarrinho();
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        Adicionar,
        AdicionarQuantidade,
        RemoverQuantidade,
        LimparCarrinho,
        ConfirmarCarrinho,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
