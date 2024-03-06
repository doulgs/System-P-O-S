export type CondicoesDePagamentoProps = (typeof CondicoesDePagamento)[0];

export const CondicoesDePagamento = [
  {
    description: "DÉBITO",
    type: "DEBIT",
  },
  {
    description: "CRÉDITO",
    type: "CREDIT",
  },
  {
    description: "VOUCHER",
    type: "VOUCHER",
  },
  {
    description: "INSTANT_PAYMENT",
    type: "INSTANT_PAYMENT",
  },
  {
    description: "PIX",
    type: "PIX",
  },
];
