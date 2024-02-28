import { getRealm } from "../../../infra/realm";
import { Pedido } from "../../../database/interfaces/Interface-Pedido";

async function salvarPedidoNoRealm(
  pedido: Pedido,
  handlePedidoWeb: number
): Promise<void> {
  // "Pago" | "A confirmar" | "Previsto" | "Rejeitado"
  const novoPedido = {
    ...pedido,
    Handle: handlePedidoWeb,
    StatusPagamento: "Rejeitado",
  };
  try {
    const realm = await getRealm();
    realm.write(() => {
      realm.create(`SchemaPedido`, novoPedido);
    });
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao salvar o pedido no Realm");
  }
}

export { salvarPedidoNoRealm };
