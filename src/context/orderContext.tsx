import {
  useState,
  useContext,
  createContext,
  useReducer,
  useEffect,
} from "react";

import { Item } from "../database/interfaces/Interface-Item";

interface OrderContextProps {
  order: Item[];
  AdicionarItems: (cartItems: Item[]) => void;
  RemoverItem: (indexItem: number) => void;
  AdicionarQuantidade: (indexItem: number) => void;
  RemoverQuantidade: (indexItem: number) => void;
  LimparCarrinho: () => void;
  orderTotal: number;
}

export const OrderContext = createContext<OrderContextProps>(
  {} as OrderContextProps
);

const initialState: Item[] = [];

type Action =
  | { type: "adicionarItems"; cartItems: Item[] }
  | { type: "removerItem"; selectedItemIndex: number }
  | { type: "adicionarQuantidade"; selectedItemIndex: number }
  | { type: "removerQuantidade"; selectedItemIndex: number }
  | { type: "limparCarrinho" };

function reducer(order: Item[], action: Action) {
  switch (action.type) {
    case "adicionarItems":
      return [...order, ...action.cartItems];
    case "removerItem":
      return order.filter((item, index) => index !== action.selectedItemIndex);
    case "adicionarQuantidade":
      return order.map((item, index) => {
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
      return order.map((item, index) => {
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
  }
}

export const OrderProvaider = ({ children }: any) => {
  const [order, dispatch] = useReducer(reducer, initialState);
  const [orderTotal, setTotal] = useState(0);

  useEffect(() => {
    resultorder(order);
  }, [order]);

  function AdicionarItems(itemsCart: Item[]) {
    dispatch({ type: "adicionarItems", cartItems: itemsCart });
  }
  function RemoverItem(indexItem: number) {
    dispatch({ type: "removerItem", selectedItemIndex: indexItem });
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

  function resultorder(items: Item[]) {
    const result = items.reduce((acc, item) => {
      return acc + item.Total;
    }, 0);
    setTotal(result);
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        AdicionarItems,
        RemoverItem,
        AdicionarQuantidade,
        RemoverQuantidade,
        LimparCarrinho,
        orderTotal,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  return context;
};
