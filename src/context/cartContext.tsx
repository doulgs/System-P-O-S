import { useState, useContext, createContext, useEffect } from "react";
import { IntItemCart } from "../Interface";
import { Item } from "../database/interfaces/Interface-Item";

interface CartContextProps {
  cart: Item[];
  AddItemCart: Function;
  RetirarItemCart: Function;
  AddQuantidadeItem: Function;
  RetirarQuantidadeItem: Function;
  cartDot: number;
  cartTotal: number;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartProvaider = ({ children }: any) => {
  const [cart, setCart] = useState<Item[]>([]);
  const [cartDot, setCartDot] = useState(0);
  const [cartTotal, setTotal] = useState(0);

  function AddItemCart(newItem: Item) {
    const updatedCart = [
      ...cart,
      {
        ...newItem,
        Amount: 1,
        Total: newItem.VendaValor,
      },
    ];

    setCart(updatedCart);
    ResultCart(updatedCart);
    ResultDotCart(updatedCart);
  }

  function RetirarItemCart(indexItem: number) {
    const updatedCart = [...cart];
    updatedCart.splice(indexItem, 1);

    setCart(updatedCart);
    ResultCart(updatedCart);
    ResultDotCart(updatedCart);
  }

  function AddQuantidadeItem(indexItem: number) {
    const indiceProcurado = indexItem;
    if (indiceProcurado >= 0 && indiceProcurado < cart.length) {
      const updatedCart = [...cart];
      const itemEncontrado = updatedCart[indiceProcurado];

      if (
        itemEncontrado.Amount !== undefined &&
        itemEncontrado.VendaValor !== undefined
      ) {
        itemEncontrado.Amount += 1;
        itemEncontrado.Total =
          itemEncontrado.Amount * itemEncontrado.VendaValor;
      }

      setCart(updatedCart);
      ResultCart(updatedCart);
      ResultDotCart(updatedCart);
    } else {
      console.log("Índice fora dos limites do array.");
    }
  }

  function RetirarQuantidadeItem(indexItem: number) {
    const indiceProcurado = indexItem;

    if (indiceProcurado >= 0 && indiceProcurado < cart.length) {
      const updatedCart = [...cart];
      const itemEncontrado = updatedCart[indiceProcurado];

      if (
        itemEncontrado &&
        itemEncontrado.Amount &&
        itemEncontrado.Amount > 1
      ) {
        itemEncontrado.Amount -= 1;
        itemEncontrado.Total =
          itemEncontrado.Amount * (itemEncontrado.VendaValor ?? 0);
      } else {
        // Se a quantidade for 1 ou menos, não fazer nada
      }

      setCart(updatedCart);
      ResultCart(updatedCart);
      ResultDotCart(updatedCart);
    } else {
      console.log("Índice fora dos limites do array.");
    }
  }

  function ResultCart(items: Item[]) {
    let myCart = items;
    const result = myCart.reduce((acc, objeto) => {
      return acc + (objeto.Total ?? 0);
    }, 0);

    setTotal(result);
  }

  function ResultDotCart(carrinho: Item[]) {
    const dotCartList = carrinho.reduce(
      (soma, objeto) => soma + (objeto.Amount ?? 0),
      0
    );
    setCartDot(dotCartList);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartDot,
        AddItemCart,
        RetirarItemCart,
        AddQuantidadeItem,
        RetirarQuantidadeItem,
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
