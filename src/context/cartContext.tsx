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
      let cartList = cart;

      cartList[indexItem].Amount = cartList[indexItem].Amount + 1;
      cartList[indexItem].Total =
        cartList[indexItem].Amount * cartList[indexItem].VendaValor;

      const dotCartList: number = cartList.reduce(
        (soma, objeto) => soma + objeto.Amount,
        0
      );

      setCart(cartList);
      setCartDot(dotCartList);

      return;
    }

    let data = {
      ...newItem,
      Amount: 1,
      Total: newItem.VendaValor,
    };

    const dotCartList: number = cart.reduce(
      (soma, objeto) => soma + objeto.Amount,
      0
    );
    setCart((itens) => [...itens, data]);
    setCartDot(dotCartList);
    //console.log([...cart, data]);
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
