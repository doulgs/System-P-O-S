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
  AdicionarQuantidadeExcecao: (
    indexItem: number,
    handleExcecao: number
  ) => void;
  RemoverQuantidadeExcecao: (indexItem: number, handleExcecao: number) => void;
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
  | { type: "limparCarrinho" }
  | {
      type: "adicionarQuantidadeExcecao";
      selectedItemIndex: number;
      selectedExcecaoHandle: number;
    }
  | {
      type: "removerQuantidadeExcecao";
      selectedItemIndex: number;
      selectedExcecaoHandle: number;
    };

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
    case "adicionarQuantidadeExcecao":
      return order.map((item, index) => {
        if (index === action.selectedItemIndex) {
          const updatedExcecoes = item.Excecoes.map((excecao, excecaoIndex) =>
            excecao.Handle === action.selectedExcecaoHandle
              ? {
                  ...excecao,
                  Amount: (excecao.Amount ?? 0) + 1,
                }
              : excecao
          );

          const exceptionsTotal = updatedExcecoes.reduce((acc, excecao) => {
            return acc + (excecao.Valor ?? 0) * (excecao.Amount ?? 0);
          }, 0);

          return {
            ...item,
            Excecoes: updatedExcecoes,
            Total:
              (item.VendaValor ?? 0) * (item.Amount ?? 0) + exceptionsTotal, // Calculate total with exceptions
          };
        }
        return item;
      });
    case "removerQuantidadeExcecao":
      return order.map((item, index) => {
        if (index === action.selectedItemIndex) {
          const updatedExcecoes = item.Excecoes.map((excecao, excecaoIndex) =>
            excecao.Handle === action.selectedExcecaoHandle
              ? {
                  ...excecao,
                  Amount: Math.max(0, (excecao.Amount ?? 0) - 1), // Ensure non-negative amount
                }
              : excecao
          );

          const exceptionsTotal = updatedExcecoes.reduce((acc, excecao) => {
            return acc + (excecao.Valor ?? 0) * (excecao.Amount ?? 0);
          }, 0);

          return {
            ...item,
            Excecoes: updatedExcecoes,
            Total:
              (item.VendaValor ?? 0) * (item.Amount ?? 0) + exceptionsTotal, // Update total with new exceptions
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
  function AdicionarQuantidadeExcecao(
    indexItem: number,
    handleExcecao: number
  ) {
    dispatch({
      type: "adicionarQuantidadeExcecao",
      selectedItemIndex: indexItem,
      selectedExcecaoHandle: handleExcecao,
    });
  }
  function RemoverQuantidadeExcecao(indexItem: number, handleExcecao: number) {
    dispatch({
      type: "removerQuantidadeExcecao",
      selectedItemIndex: indexItem,
      selectedExcecaoHandle: handleExcecao,
    });
  }

  function resultorder(items: Item[]) {
    const baseTotal = items.reduce((acc, item) => {
      const itemTotal = (item.VendaValor ?? 0) * (item.Amount ?? 0);

      const exceptionsTotal = item.Excecoes.reduce((acc, excecao) => {
        return (
          acc +
          (excecao.Valor ?? 0) * (excecao.Amount ?? 0) * (item.Amount ?? 0)
        );
      }, 0);

      return acc + itemTotal + exceptionsTotal;
    }, 0);

    setTotal(baseTotal);
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
        AdicionarQuantidadeExcecao,
        RemoverQuantidadeExcecao,
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
