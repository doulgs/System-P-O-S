export interface Filial {
  franquia: null | any;
  GrupoFilial: null | any;
  Tabela: null | any;
  HandleGrupoFilial: null | any;
  Nome: string;
  Razao: string;
  Fone: string;
  CnpjCpf: string;
  NomeSite: string;
  BackgroudColor: string;
  FontColor: string;
  TitleColor: string;
  Titulo01: null | any;
  Texto01: null | any;
  Titulo02: null | any;
  Texto02: null | any;
  Logo: null | any;
  ValorPedidoMinimo: number;
  Endereco: string;
  Numero: string;
  Complemento: string;
  Bairro: string;
  Cep: string;
  Cidade: string;
  Estado: string;
  NumeroWhatsAppPedido: null | any;
  PrevisaoEntregaMin: number;
  PrevisaoRetiraMin: number;
  TaxaEntrega: number;
  MensagemTaxaEntrega: null | any;
  TipoFrete: string;
  LogoByte: null | any;
  EstaAberto: boolean;
  Titulo01Cardapio: null | any;
  Texto01Cardapio: null | any;
  Titulo02Cardapio: null | any;
  Texto02Cardapio: null | any;
  ApiKeyHere: string;
  ConfigPrecoPizza: null | any;
  PossuiIntegracao: boolean;
  TipoAtendimento: number;
  HandleTabela: null | any;
  Preco: number;
  PossuiValidacaoEndereco: boolean;
  ImagemPadraoPizza: null | any;
  ObrigatorioEnviarPedidoPeloWhatsApp: boolean;
  HandleRamoAtividade: null | any;
  PathRelPedidoSowPublisoft: null | any;
  EmailHost: string;
  EmailUsuario: string;
  EmailSenha: string;
  EmailPorta: number;
  Timeout: number;
  EmailAtivarSsl: boolean;
  MensagemPedidoEmail: string;
  LimiteRetirada: number;
  IntervaloAgendamento: number;
  UtilizaHorarioAgendamento: boolean;
  HandleFranquia: null | any;
  GatewayPagamento: string;
  ChavePublica: string;
  ChaveSecreta: string;
  ImagemPadraoPizzaByte: null | any;
  PathRelPedidoSowPublisoftByte: null | any;
  MostarExcecaoPedidoVenda: boolean;
  LayoutTelaItensSowPublisoft: number;
  PermiteDigitacaoPreco: boolean;
  QuantidadeInteira: boolean;
  DiasPrevisaoEntrega: number;
  QtdAparelhosLiberadosPubliVendas: null | any;
  ChaveApps: string;
  Tabelas: null | any;
  Handle: number;
  HandleFilial: null | any;
  HandleTrade: number;
  Plataforma: number;
}
export interface Grupo1 {
  Codigo: string;
  Nome: string;
  Reduzido: string;
  Tabelas: null | any;
  Handle: number;
  HandleFilial: number;
  HandleTrade: number;
  Plataforma: number;
}
export interface Grupo2 {
  Codigo: string;
  Nome: string;
  Reduzido: string;
  Tipo: string;
  Foto: string;
  PossuiComposicao: boolean;
  PermiteItemSemValor: boolean;
  AbrirTelaExcecoes: boolean;
  PossuiCaracteristicaItem: boolean;
  FotoByte: null | any;
  Tabelas: null | any;
  Handle: number;
  HandleFilial: number;
  HandleTrade: number;
  Plataforma: number;
}
export interface Grupo3 {
  Codigo: string;
  Nome: string;
  Nome2: string;
  Reduzido: string;
  Inativo: boolean;
  QuantidadeItensComposicao: number;
  Tabelas: null | any;
  Handle: number;
  HandleFilial: number;
  HandleTrade: number;
  Plataforma: number;
}
export interface Unidade {
  Sigla: string;
  Descricao: string;
  Tabelas: null | any;
  Handle: number;
  HandleFilial: number;
  HandleTrade: number;
  Plataforma: number;
}
export interface IntItem {
  Filial: Filial;
  Grupo1: Grupo1;
  Grupo2: Grupo2;
  Grupo3: Grupo3;
  Unidade: Unidade;
  HandleGrupo1: number;
  HandleGrupo2: number;
  HandleGrupo3: number;
  HandleUnidade: number;
  ClassificacaoMarketPlace: null | any;
  Codigo: string;
  Descricao: string;
  Complemento: string;
  DescReduzida: null | any;
  Foto: null | any;
  PrecoValor: number;
  Composicao: boolean;
  DescLonga: null | any;
  ComposicaoBarra: string;
  NaoPermiteDesconto: boolean;
  DescricaoDif: null | any;
  VendaValor: number;
  ValorPromocional: null | any;
  VendaFrete: number;
  CustoValor: number;
  Observacao: null | any;
  Quantidade: number;
  FotoByte: null | any;
  Mark: boolean;
  Tabelas: null | any;
  Handle: number;
  HandleFilial: number;
  HandleTrade: number;
  Plataforma: number;
}

export const Item: IntItem[] = [
  {
    Filial: {
      franquia: null,
      GrupoFilial: null,
      Tabela: null,
      HandleGrupoFilial: null,
      Nome: "DISPROFLOR LTDA",
      Razao: "DISPROFLOR LTDA",
      Fone: "(44) 33460656",
      CnpjCpf: "40.961.836/0001-77",
      NomeSite: "DISPROFLOR",
      BackgroudColor: "#000000",
      FontColor: "#000000",
      TitleColor: "#000000",
      Titulo01: null,
      Texto01: null,
      Titulo02: null,
      Texto02: null,
      Logo: null,
      ValorPedidoMinimo: 0.0,
      Endereco: "AV PIONEIRO JOAO PEREIRA",
      Numero: "3721",
      Complemento: "",
      Bairro: "PARIS 3",
      Cep: "87083-513",
      Cidade: "MARINGA",
      Estado: "PR",
      NumeroWhatsAppPedido: null,
      PrevisaoEntregaMin: 0,
      PrevisaoRetiraMin: 0,
      TaxaEntrega: 0.0,
      MensagemTaxaEntrega: null,
      TipoFrete: "",
      LogoByte: null,
      EstaAberto: false,
      Titulo01Cardapio: null,
      Texto01Cardapio: null,
      Titulo02Cardapio: null,
      Texto02Cardapio: null,
      ApiKeyHere: "",
      ConfigPrecoPizza: null,
      PossuiIntegracao: true,
      TipoAtendimento: 2,
      HandleTabela: null,
      Preco: 1,
      PossuiValidacaoEndereco: true,
      ImagemPadraoPizza: null,
      ObrigatorioEnviarPedidoPeloWhatsApp: false,
      HandleRamoAtividade: null,
      PathRelPedidoSowPublisoft: null,
      EmailHost: "smtp-mail.outlook.com",
      EmailUsuario: "obrigacoesfiscais1@outlook.com",
      EmailSenha: "publisoft@635241",
      EmailPorta: 587,
      Timeout: 999999,
      EmailAtivarSsl: true,
      MensagemPedidoEmail: "",
      LimiteRetirada: 0,
      IntervaloAgendamento: 0,
      UtilizaHorarioAgendamento: false,
      HandleFranquia: null,
      GatewayPagamento: "",
      ChavePublica: "",
      ChaveSecreta: "",
      ImagemPadraoPizzaByte: null,
      PathRelPedidoSowPublisoftByte: null,
      MostarExcecaoPedidoVenda: false,
      LayoutTelaItensSowPublisoft: 0,
      PermiteDigitacaoPreco: true,
      QuantidadeInteira: false,
      DiasPrevisaoEntrega: 0,
      QtdAparelhosLiberadosPubliVendas: null,
      ChaveApps: "F16fZ149",
      Tabelas: null,
      Handle: 149,
      HandleFilial: null,
      HandleTrade: 11,
      Plataforma: 0,
    },
    Grupo1: {
      Codigo: "0004",
      Nome: "GRUPO01",
      Reduzido: "GRUPO01",
      Tabelas: null,
      Handle: 791,
      HandleFilial: 149,
      HandleTrade: 41,
      Plataforma: 4,
    },
    Grupo2: {
      Codigo: "0010",
      Nome: "ERVAS",
      Reduzido: "ERVAS",
      Tipo: "Produto",
      Foto: "C:\\Desenvolvimento\\Foods\\Whatsapp\\Front\\publi-foods-whatsapp\\images\\14911932000109\\grupo2\\grupo2-0006.png",
      PossuiComposicao: false,
      PermiteItemSemValor: false,
      AbrirTelaExcecoes: false,
      PossuiCaracteristicaItem: false,
      FotoByte: null,
      Tabelas: null,
      Handle: 1445,
      HandleFilial: 149,
      HandleTrade: 101,
      Plataforma: 4,
    },
    Grupo3: {
      Codigo: "0002",
      Nome: "BRANCA",
      Nome2: "BRANCA",
      Reduzido: "BRANCA",
      Inativo: false,
      QuantidadeItensComposicao: 0,
      Tabelas: null,
      Handle: 281,
      HandleFilial: 149,
      HandleTrade: 21,
      Plataforma: 4,
    },
    Unidade: {
      Sigla: "CX",
      Descricao: "CAIXAS",
      Tabelas: null,
      Handle: 302,
      HandleFilial: 149,
      HandleTrade: 31,
      Plataforma: 4,
    },
    HandleGrupo1: 791,
    HandleGrupo2: 1445,
    HandleGrupo3: 281,
    HandleUnidade: 302,
    ClassificacaoMarketPlace: null,
    Codigo: "0002",
    Descricao: "TESTE 2",
    Complemento: "",
    DescReduzida: null,
    Foto: null,
    PrecoValor: 0.0,
    Composicao: false,
    DescLonga: null,
    ComposicaoBarra: "NÃO",
    NaoPermiteDesconto: false,
    DescricaoDif: null,
    VendaValor: 1.0,
    ValorPromocional: null,
    VendaFrete: 0.0,
    CustoValor: 0.0,
    Observacao: null,
    Quantidade: 0.0,
    FotoByte: null,
    Mark: false,
    Tabelas: null,
    Handle: 24763,
    HandleFilial: 149,
    HandleTrade: 21,
    Plataforma: 4,
  },
  {
    Filial: {
      franquia: null,
      GrupoFilial: null,
      Tabela: null,
      HandleGrupoFilial: null,
      Nome: "DISPROFLOR LTDA",
      Razao: "DISPROFLOR LTDA",
      Fone: "(44) 33460656",
      CnpjCpf: "40.961.836/0001-77",
      NomeSite: "DISPROFLOR",
      BackgroudColor: "#000000",
      FontColor: "#000000",
      TitleColor: "#000000",
      Titulo01: null,
      Texto01: null,
      Titulo02: null,
      Texto02: null,
      Logo: null,
      ValorPedidoMinimo: 0.0,
      Endereco: "AV PIONEIRO JOAO PEREIRA",
      Numero: "3721",
      Complemento: "",
      Bairro: "PARIS 3",
      Cep: "87083-513",
      Cidade: "MARINGA",
      Estado: "PR",
      NumeroWhatsAppPedido: null,
      PrevisaoEntregaMin: 0,
      PrevisaoRetiraMin: 0,
      TaxaEntrega: 0.0,
      MensagemTaxaEntrega: null,
      TipoFrete: "",
      LogoByte: null,
      EstaAberto: false,
      Titulo01Cardapio: null,
      Texto01Cardapio: null,
      Titulo02Cardapio: null,
      Texto02Cardapio: null,
      ApiKeyHere: "",
      ConfigPrecoPizza: null,
      PossuiIntegracao: true,
      TipoAtendimento: 2,
      HandleTabela: null,
      Preco: 1,
      PossuiValidacaoEndereco: true,
      ImagemPadraoPizza: null,
      ObrigatorioEnviarPedidoPeloWhatsApp: false,
      HandleRamoAtividade: null,
      PathRelPedidoSowPublisoft: null,
      EmailHost: "smtp-mail.outlook.com",
      EmailUsuario: "obrigacoesfiscais1@outlook.com",
      EmailSenha: "publisoft@635241",
      EmailPorta: 587,
      Timeout: 999999,
      EmailAtivarSsl: true,
      MensagemPedidoEmail: "",
      LimiteRetirada: 0,
      IntervaloAgendamento: 0,
      UtilizaHorarioAgendamento: false,
      HandleFranquia: null,
      GatewayPagamento: "",
      ChavePublica: "",
      ChaveSecreta: "",
      ImagemPadraoPizzaByte: null,
      PathRelPedidoSowPublisoftByte: null,
      MostarExcecaoPedidoVenda: false,
      LayoutTelaItensSowPublisoft: 0,
      PermiteDigitacaoPreco: true,
      QuantidadeInteira: false,
      DiasPrevisaoEntrega: 0,
      QtdAparelhosLiberadosPubliVendas: null,
      ChaveApps: "F16fZ149",
      Tabelas: null,
      Handle: 149,
      HandleFilial: null,
      HandleTrade: 11,
      Plataforma: 0,
    },
    Grupo1: {
      Codigo: "0004",
      Nome: "GRUPO01",
      Reduzido: "GRUPO01",
      Tabelas: null,
      Handle: 791,
      HandleFilial: 149,
      HandleTrade: 41,
      Plataforma: 4,
    },
    Grupo2: {
      Codigo: "0010",
      Nome: "ERVAS",
      Reduzido: "ERVAS",
      Tipo: "Produto",
      Foto: "C:\\Desenvolvimento\\Foods\\Whatsapp\\Front\\publi-foods-whatsapp\\images\\14911932000109\\grupo2\\grupo2-0006.png",
      PossuiComposicao: false,
      PermiteItemSemValor: false,
      AbrirTelaExcecoes: false,
      PossuiCaracteristicaItem: false,
      FotoByte: null,
      Tabelas: null,
      Handle: 1445,
      HandleFilial: 149,
      HandleTrade: 101,
      Plataforma: 4,
    },
    Grupo3: {
      Codigo: "0002",
      Nome: "BRANCA",
      Nome2: "BRANCA",
      Reduzido: "BRANCA",
      Inativo: false,
      QuantidadeItensComposicao: 0,
      Tabelas: null,
      Handle: 281,
      HandleFilial: 149,
      HandleTrade: 21,
      Plataforma: 4,
    },
    Unidade: {
      Sigla: "CX",
      Descricao: "CAIXAS",
      Tabelas: null,
      Handle: 302,
      HandleFilial: 149,
      HandleTrade: 31,
      Plataforma: 4,
    },
    HandleGrupo1: 791,
    HandleGrupo2: 1445,
    HandleGrupo3: 281,
    HandleUnidade: 302,
    ClassificacaoMarketPlace: null,
    Codigo: "0001",
    Descricao: "TESTE 1",
    Complemento: "",
    DescReduzida: null,
    Foto: null,
    PrecoValor: 0.0,
    Composicao: false,
    DescLonga: null,
    ComposicaoBarra: "NÃO",
    NaoPermiteDesconto: false,
    DescricaoDif: null,
    VendaValor: 1.0,
    ValorPromocional: null,
    VendaFrete: 0.0,
    CustoValor: 0.0,
    Observacao: null,
    Quantidade: 0.0,
    FotoByte: null,
    Mark: false,
    Tabelas: null,
    Handle: 11,
    HandleFilial: 149,
    HandleTrade: 16721,
    Plataforma: 4,
  },
];
