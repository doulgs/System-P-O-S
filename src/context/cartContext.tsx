import { useState, useContext, createContext, useEffect } from "react";
import { IntItemCart } from "../Interface";

interface CartContextProps {
  cart: IntItemCart[];
  AddItemCart: Function;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartProvaider = ({ children }: any) => {
  const [cart, setCart] = useState<IntItemCart[]>([]);

  const AddItemCart = (newItem: IntItemCart) => {
    const indexItem = cart.findIndex((item) => item.Handle === newItem.Handle);

    if (indexItem !== -1) {
      let cartList = cart;

      cartList[indexItem].Amount = cartList[indexItem].Amount + 1;
      cartList[indexItem].Total =
        cartList[indexItem].Amount * cartList[indexItem].VendaValor;

      setCart(cartList);
      //console.log(cartList);
      return;
    }

    let data = {
      ...newItem,
      Amount: 1,
      Total: newItem.VendaValor,
    };

    setCart((itens) => [...itens, data]);
    //console.log([...cart, data]);
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
