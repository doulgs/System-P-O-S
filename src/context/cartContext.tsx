import { useState, useContext, createContext, useEffect } from "react";
import { IntItemCart } from "../Interface";

interface CartContextProps {
  cart: IntItemCart[];
  AddItemCart: Function;
  cartDot: number;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartProvaider = ({ children }: any) => {
  const [cart, setCart] = useState<IntItemCart[]>([]);
  const [cartDot, setCartDot] = useState(0);

  const AddItemCart = (newItem: IntItemCart) => {
    const indexItem = cart.findIndex((item) => item.Handle === newItem.Handle);

    if (indexItem !== -1) {
      const updatedCart = [...cart];
      const existingItem = updatedCart[indexItem];

      existingItem.Amount += 1;
      existingItem.Total = existingItem.Amount * existingItem.VendaValor;

      const dotCartList = updatedCart.reduce(
        (soma, objeto) => soma + objeto.Amount,
        0
      );

      setCart(updatedCart);
      setCartDot(dotCartList);

      return;
    }

    const updatedCart = [
      ...cart,
      { ...newItem, Amount: 1, Total: newItem.VendaValor },
    ];

    const dotCartList = updatedCart.reduce(
      (soma, objeto) => soma + objeto.Amount,
      0
    );

    setCart(updatedCart);
    setCartDot(dotCartList);
  };

  return (
    <CartContext.Provider value={{ cart, cartDot, AddItemCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
