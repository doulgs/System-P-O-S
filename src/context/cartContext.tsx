import { useState, useContext, createContext, useEffect } from "react";
import { IntItemCart } from "../Interface";

interface CartContextProps {
  cart: IntItemCart[];
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
  const [cart, setCart] = useState<IntItemCart[]>([]);
  const [cartDot, setCartDot] = useState(0);
  const [cartTotal, setTotal] = useState(0);

  function AddItemCart(newItem: IntItemCart) {
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

      itemEncontrado.Amount += 1;
      itemEncontrado.Total = itemEncontrado.Amount * itemEncontrado.VendaValor;

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

      if (itemEncontrado.Amount > 1) {
        itemEncontrado.Amount -= 1;
        itemEncontrado.Total =
          itemEncontrado.Amount * itemEncontrado.VendaValor;
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

  function ResultCart(items: IntItemCart[]) {
    let myCart = items;
    const result = myCart.reduce((acc, objeto) => {
      return acc + objeto.Total;
    }, 0);

    setTotal(result);
  }

  function ResultDotCart(carrinho: IntItemCart[]) {
    const dotCartList = carrinho.reduce(
      (soma, objeto) => soma + objeto.Amount,
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
