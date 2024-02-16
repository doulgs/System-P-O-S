import {
  useState,
  useContext,
  createContext,
  useReducer,
  useEffect,
} from "react";

import { useOrder } from "./orderContext";
import { Item } from "../database/interfaces/Interface-Item";

interface CartContextProps {
  cart: Item[];
  AdicionarItem: (novoItem: Item) => void;
  RemoverItem: (indexItem: number) => void;
  AdicionarQuantidade: (indexItem: number) => void;
  RemoverQuantidade: (indexItem: number) => void;
  LimparCarrinho: () => void;
  ConfirmarCarrinho: () => void;
  cartTotal: number;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

const initialState: Item[] = [];

type Action =
  | { type: "adicionarItem"; selectedItem: Item }
  | { type: "removerItem"; selectedItemHandle: number }
  | { type: "adicionarQuantidade"; selectedItemIndex: number }
  | { type: "removerQuantidade"; selectedItemIndex: number }
  | { type: "limparCarrinho" }
  | { type: "confirmarCarrinho" };

function reducer(cart: Item[], action: Action) {
  switch (action.type) {
    case "adicionarItem":
      return [
        ...cart,
        {
          ...action.selectedItem,
          Amount: action.selectedItem.Amount + 1,
          Total: action.selectedItem.VendaValor ?? 0,
        },
      ];
    case "removerItem":
      return cart.filter(
        (item, index) => item.Handle !== action.selectedItemHandle
      );
    case "adicionarQuantidade":
      return cart.map((item, index) => {
        if (index === action.selectedItemIndex) {
          return {
            ...item,
            Amount: item.Amount + 1,
            Total: (item.Amount + 1) * (item.VendaValor ?? 0),
          };
        }
        return item;
      });
    case "removerQuantidade":
      return cart.map((item, index) => {
        if (index === action.selectedItemIndex && item.Amount > 1) {
          return {
            ...item,
            Amount: item.Amount - 1,
            Total: item.Total - (item.VendaValor ?? 0),
          };
        }
        return item;
      });
    case "limparCarrinho":
      return [];
    case "confirmarCarrinho":
      return [...cart];
  }
}

export const CartProvider = ({ children }: any) => {
  const [cart, dispatch] = useReducer(reducer, initialState);
  const [cartTotal, setTotal] = useState(0);
  const { AdicionarItems } = useOrder();

  useEffect(() => {
    resultCart(cart);
  }, [cart]);

  function AdicionarItem(novoItem: Item) {
    dispatch({ type: "adicionarItem", selectedItem: novoItem });
  }
  function RemoverItem(itemHandle: number) {
    dispatch({ type: "removerItem", selectedItemHandle: itemHandle });
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
    AdicionarItems(cart); // Passa o carrinho para a função AdicionarItems
    LimparCarrinho();
  }

  function resultCart(items: Item[]) {
    const result = items.reduce((acc, item) => {
      return acc + item.Total;
    }, 0);
    setTotal(result);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        AdicionarItem,
        RemoverItem,
        AdicionarQuantidade,
        RemoverQuantidade,
        LimparCarrinho,
        ConfirmarCarrinho,
        cartTotal,
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
