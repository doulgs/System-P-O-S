import Realm from "realm";
import { PedidoItem } from "./Interface-PedidoItem";

export interface Pedido {
  Handle?: number;
  HandleCondicao?: number;
  Data: Date | string;
  CliNome: string;
  CliCnpjCpf: string;
  CliFone: string;
  TotalItens: number;
  TotalDesconto: number;
  Total: number;
  Itens: PedidoItem[];
  StatusPagamento?: "Pago" | "A confirmar" | "Previsto" | "Rejeitado";
}

export type PedidoObject = Pedido & Realm.Object;

// ## Possíveis Status situações de um recebimento

// Confira quais são as possíveis situações de um recebimento e a explicação de cada uma delas:
// Pago: indica que o pagamento foi confirmado pela instituição da conta recebimento. Se o valor não cair na sua conta até o final do dia em que o pagamento foi feito, entre em contato com a instituição.
// A confirmar: indica que o pagamento foi enviado pra conta de recebimento e está aguardando a confirmação da instituição.
// Previsto: indica que o pagamento ainda vai ser enviado pra conta de recebimento. O valor pode mudar de acordo com as vendas feitas.
// Rejeitado: indica que o pagamento foi rejeitado pela instituição da conta de recebimento. Confira se os dados da sua conta de recebimento estão corretos pra gente tentar novamente!
