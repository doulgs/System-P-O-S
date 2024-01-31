import { useState, useContext, createContext, useEffect } from "react";
import { IntItem } from "../mocks/Item";

interface CartContextProps {
  cart: IntItem[];
  AddItemCart: Function;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartProvaider = ({ children }: any) => {
  const [cart, setCart] = useState<IntItem[]>([]);

  const AddItemCart = (newItem: IntItem) => {
    const indexItem = cart.findIndex((item) => item.Handle === newItem.Handle);

    if (indexItem !== -1) {
      let cartList = cart;
      cartList[indexItem].amount = cartList[indexItem].amount + 1;

      cartList[indexItem].totel =
        cartList[indexItem].amount * cartList[indexItem].VendaValor;

      setCart(cartList);
      console.log(cartList);
      return;
    }

    let data = {
      ...newItem,
      amount: 1,
      totel: newItem.VendaValor,
    };

    setCart((itens) => [...itens, data]);
    console.log([...cart, data]);
  };

  return (
    <CartContext.Provider value={{ cart, AddItemCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
