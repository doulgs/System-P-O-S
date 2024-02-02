import { useState, useContext, createContext, useEffect } from "react";
import { IntItemCart } from "../Interface";

interface CartContextProps {
  cart: IntItemCart[];
  AddItemCart: Function;
  RemoveItemCart: Function;
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

    const dotCartList = updatedCart.reduce(
      (soma, objeto) => soma + objeto.Amount,
      0
    );

    setCart(updatedCart);
    ResultCart(updatedCart);
    setCartDot(dotCartList);
  }

  function RemoveItemCart(itemCart: IntItemCart) {
    const indexItemRemove = cart.findIndex(
      (item) => item.Handle === itemCart.Handle
    );

    if (cart[indexItemRemove]?.Amount > 1) {
      const updatedCart = [...cart];
      const removedItem = updatedCart[indexItemRemove];

      removedItem.Amount -= 1;
      removedItem.Total = removedItem.Total - removedItem.VendaValor;

      const dotCartList = updatedCart.reduce(
        (soma, objeto) => soma + objeto.Amount,
        0
      );

      setCart(updatedCart);
      ResultCart(updatedCart);
      setCartDot(dotCartList);
      return;
    }

    const updatedCart = cart.filter((item) => item.Handle !== itemCart.Handle);
    const dotCartList = updatedCart.reduce(
      (soma, objeto) => soma + objeto.Amount,
      0
    );

    setCart(updatedCart);
    ResultCart(updatedCart);
    setCartDot(dotCartList);
  }

  function ResultCart(items: IntItemCart[]) {
    let myCart = items;
    const result = myCart.reduce((acc, objeto) => {
      return acc + objeto.Total;
    }, 0);

    setTotal(result);
  }

  return (
    <CartContext.Provider
      value={{ cart, cartDot, AddItemCart, RemoveItemCart, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
