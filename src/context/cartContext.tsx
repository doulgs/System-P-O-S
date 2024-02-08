import { useState, useContext, createContext } from "react";
import { Item } from "../database/interfaces/Interface-Item";
import { useNavigation } from "@react-navigation/native";

interface CartContextProps {
  cart: Item[];

  AddItemCart: Function;
  RetirarItemCart: Function;
  AddQuantidadeItem: Function;
  RetirarQuantidadeItem: Function;
  cartDot: number;
  cartTotal: number;

  cartList: Item[];
  ConfirmarItens: Function;
  AdicionarQuantidade: Function;
  RemoverQuantidade: Function;
  RemoverItem: Function;

  LimparCarrinho: Function;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartProvaider = ({ children }: any) => {
  const navigation = useNavigation();
  const [cartList, setCartList] = useState<Item[]>([]);
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

  function RetirarItemCart(item: Item) {
    const updatedCart = [...cart];
    updatedCart.splice(item.Handle, 1);

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

  function ConfirmarItens() {
    console.log("Itens Confirmados");
    const updatedCartList = [...cartList, ...cart];
    setCartList(updatedCartList);
    ResultCart(updatedCartList);
    ResultDotCart(updatedCartList);
    navigation.navigate("Cart");
  }

  function AdicionarQuantidade(indexItem: number) {
    const indiceProcurado = indexItem;
    if (indiceProcurado >= 0 && indiceProcurado < cartList.length) {
      const updatedCart = [...cartList];
      const itemEncontrado = updatedCart[indiceProcurado];
      if (
        itemEncontrado.Amount !== undefined &&
        itemEncontrado.VendaValor !== undefined
      ) {
        itemEncontrado.Amount += 1;
        itemEncontrado.Total =
          itemEncontrado.Amount * itemEncontrado.VendaValor;
      }

      setCartList(updatedCart);
      ResultCart(updatedCart);
      ResultDotCart(updatedCart);
    } else {
      console.log("Índice fora dos limites do array.");
    }
  }

  function RemoverQuantidade(indexItem: number) {
    const indiceProcurado = indexItem;

    if (indiceProcurado >= 0 && indiceProcurado < cartList.length) {
      const updatedCart = [...cartList];
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

      setCartList(updatedCart);
      ResultCart(updatedCart);
      ResultDotCart(updatedCart);
    } else {
      console.log("Índice fora dos limites do array.");
    }
  }

  function RemoverItem(indexItem: number) {
    const updatedCart = [...cartList];
    updatedCart.splice(indexItem, 1);

    setCartList(updatedCart);
    ResultCart(updatedCart);
    ResultDotCart(updatedCart);
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

  function LimparCarrinho() {
    console.log("Carrinho Limpo com sucesso");
    setCart([]);
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

        cartList,
        ConfirmarItens,
        AdicionarQuantidade,
        RemoverQuantidade,
        RemoverItem,

        LimparCarrinho,
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
