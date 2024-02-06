import { FlatList } from "react-native";
import { Item } from "../../database/interfaces/Interface-Item";

interface CarrinhoProps {
  produto: Item;
  quantidade: number;
}

export function Carrinho() {
  return <FlatList data={[]} />;
}
