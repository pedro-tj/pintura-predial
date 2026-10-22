export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  recommendedFor: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'fachada' | 'impermeabilizacao' | 'pastilhas' | 'telhado' | 'comercial';
  location: string;
  description: string;
  beforeImage?: string;
  afterImage: string;
  isBeforeAfter?: boolean;
}

export const COMPANY_DATA = {
  name: "Pires & Lins Pinturas e Revitalização de Fachadas",
  shortName: "Pires & Lins Pinturas",
  heroTitle: "PINTURA PREDIAL E REVITALIZAÇÃO DE FACHADAS EM BELÉM",
  heroSubtitle: "Proteja, renove e valorize seu patrimônio com atendimento especializado e orçamento gratuito em toda a Região Metropolitana.",
  phones: {
    whatsapp1: {
      number: "(91) 98198-6761",
      clean: "5591981986761",
      label: "WhatsApp Comercial Principal"
    },
    whatsapp2: {
      number: "(91) 99170-4839",
      clean: "5591991704839",
      label: "WhatsApp Orçamentos Rápidos"
    },
    additional: {
      number: "(91) 98804-4658",
      clean: "5591988044658",
      label: "Telefone de Atendimento"
    }
  },
  email: "comercial@pireselins.com.br",
  address: {
    street: "Rua Val de Cans, nº 21",
    neighborhood: "Cabanagem",
    city: "Belém",
    state: "PA",
    full: "Rua Val de Cans, nº 21, Cabanagem, Belém–PA",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Val+de+Cans+21+Cabanagem+Belem+PA"
  },
  social: {
    instagram: "https://www.instagram.com/pireselins/",
    facebook: "https://www.facebook.com/pireslins.pires.1"
  },
  workingHours: "Segunda a Sexta: 08h às 18h | Sábado: 08h às 13h",
  coverageAreas: [
    "Belém (Centro, Umarizal, Nazaré, Batista Campos, Marco, Cabanagem e todos os bairros)",
    "Ananindeua (Cidade Nova, Centro, Coqueiro e região)",
    "Marituba",
    "Benevides",
    "Santa Izabel do Pará",
    "Castanhal",
    "Ilha de Mosqueiro",
    "Região Metropolitana e Interior do Pará"
  ]
};

export function buildWhatsAppLink(phoneClean: string, message: string): string {
  return `https://wa.me/${phoneClean}?text=${encodeURIComponent(message)}`;
}

export const TRUST_BADGES = [
  {
    title: "SEGURANÇA & NR-35",
    description: "Equipe com capacitação em trabalho em altura, linhas de vida e EPIs completos.",
    icon: "ShieldCheck"
  },
  {
    title: "ESPECIALISTAS EM FACHADAS",
    description: "Pintores profissionais com anos de experiência em edifícios e grandes estruturas.",
    icon: "PaintRoller"
  },
  {
    title: "MÍNIMO IMPACTO NA ROTINA",
    description: "Isolamento planejado de áreas, protegendo moradores, pedestres e veículos.",
    icon: "Building"
  },
  {
    title: "MATERIAIS DE ALTA RESISTÊNCIA",
    description: "Produtos específicos para suportar o calor, a umidade e as chuvas de Belém.",
    icon: "Award"
  }
];

export const PROPERTY_TYPES = [
  {
    title: "EDIFÍCIOS RESIDENCIAIS",
    subtitle: "Condomínios verticais e horizontais",
    desc: "Revitalização externa, áreas comuns e prevenção de infiltrações para valorizar as unidades.",
    badge: "Alta Procura"
  },
  {
    title: "PRÉDIOS COMERCIAIS",
    subtitle: "Centros empresariais e escritórios",
    desc: "Renovação de fachada com cronograma flexível para não interromper o expediente de trabalho.",
    badge: "Corporativo"
  },
  {
    title: "GALPÕES & INDÚSTRIAS",
    subtitle: "Centros de distribuição e fábricas",
    desc: "Pintura técnica de alto rendimento, pisos epóxi, estruturas metálicas e telhados industriais.",
    badge: "Industrial"
  },
  {
    title: "LOJAS & VAREJO",
    subtitle: "Fachadas comerciais e showrooms",
    desc: "Identidade visual renovada, impermeabilização e acabamento de alto padrão para atrair clientes.",
    badge: "Comercial"
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "fachadas",
    title: "Revitalização de Fachadas",
    shortDesc: "Lavagem pressurizada, recuperação de trincas, tratamento de fissuras e repintura técnica com tintas elastoméricas.",
    fullDesc: "A fachada é o cartão de visita e a primeira proteção do edifício. Realizamos lavagem técnica com hidrojateamento, remoção de fungos e mofo típicos do clima paraense, calafetação de juntas, tratamento de trincas e aplicação de seladores e tintas elastoméricas de alta durabilidade.",
    iconName: "Building2",
    benefits: [
      "Lavagem pressurizada e descontaminação",
      "Tratamento de fissuras dinâmicas e estáticas",
      "Tintas elastoméricas com proteção UV",
      "Valorização imediata do condomínio no mercado"
    ],
    recommendedFor: "Condomínios residenciais e empresariais em Belém e Ananindeua"
  },
  {
    id: "pintura-interna-externa",
    title: "Pintura Interna e Externa",
    shortDesc: "Acabamento de alto padrão para áreas sociais, halls, escadarias, garagens, muros e interiores corporativos.",
    fullDesc: "Serviço completo de pintura predial e comercial com preparação minuciosa de superfícies, emassamento, lixamento técnico e demãos homogêneas. Cuidado absoluto com proteção de pisos, vidros e mobiliário existente.",
    iconName: "Paintbrush",
    benefits: [
      "Pintura lavável e antimofo",
      "Demarcação de garagens e sinalização",
      "Proteção rigorosa de esquadrias e pisos",
      "Limpeza e organização diária da obra"
    ],
    recommendedFor: "Condomínios, clínicas, escolas e residências de grande porte"
  },
  {
    id: "manta-asfaltica",
    title: "Aplicação de Manta Asfáltica",
    shortDesc: "Tratamento definitivo de infiltrações em lajes, marquises, jardineiras e coberturas expostas.",
    fullDesc: "Belém possui um dos regimes pluviométricos mais intensos do país. Realizamos a regularização da base com caimento correto e aplicação a maçarico de manta asfáltica aluminizada ou poliéster de primeira linha para vedação total contra vazamentos.",
    iconName: "Layers",
    benefits: [
      "Solução definitiva contra goteiras e umidade",
      "Manta asfáltica com reforço estrutural",
      "Proteção de armaduras de concreto contra corrosão",
      "Inspeção técnica detalhada de pontos críticos"
    ],
    recommendedFor: "Lajes de cobertura, caixas-d'água, coberturas e marquises prediais"
  },
  {
    id: "pastilhas",
    title: "Reposição de Pastilhas Soltas",
    shortDesc: "Identificação por teste de percussão, remoção segura de placas fofas, reforço de aderência e rejuntamento impermeável.",
    fullDesc: "Pastilhas caindo representam risco grave à integridade física de pedestres e moradores. Realizamos o mapeamento percussivo em toda a extensão do prédio, remoção das peças descoladas, aplicação de argamassa colante especial para fachada (AC-III) e rejunte flexível resistente à água.",
    iconName: "Grid",
    benefits: [
      "Teste de percussão sonoro minucioso",
      "Prevenção contra acidentes graves",
      "Rejunte com aditivo impermeabilizante e antifungos",
      "Assentamento com argamassa flexível AC-III"
    ],
    recommendedFor: "Edifícios revestidos com pastilhas cerâmicas ou porcelanatos"
  },
  {
    id: "telhados",
    title: "Reforma e Manutenção de Telhados",
    shortDesc: "Troca de telhas quebradas, alinhamento estrutural, limpeza e vedação de calhas e rufos metálicos.",
    fullDesc: "Manutenção completa de telhados residenciais, comerciais e industriais. Corrigimos pontos de entrada de água, desobstruímos condutores pluviais, substituímos calhas enferrujadas e aplicamos impermeabilizantes térmicos para diminuir o calor interno.",
    iconName: "Home",
    benefits: [
      "Eliminação de goteiras crônicas",
      "Revisão e substituição de calhas e rufos",
      "Pintura térmica reflexiva disponível",
      "Reforço de fixação contra ventanias"
    ],
    recommendedFor: "Galpões logísticos, edifícios e coberturas comerciais"
  },
  {
    id: "cisternas",
    title: "Revitalização de Cisternas e Caixas-d'Água",
    shortDesc: "Impermeabilização atóxica, tratamento de fissuras internas e vedação para garantir água pura e sem perdas.",
    fullDesc: "A água potável do condomínio não pode ter contato com fissuras, infiltrações externas ou resíduos de alvenaria. Realizamos limpeza técnica, escarificação, estancamento de vazamentos e impermeabilização com argamassa polimérica potável atóxica.",
    iconName: "Droplet",
    benefits: [
      "Produtos 100% atóxicos próprios para água potável",
      "Combate ao desperdício e conta de água elevada",
      "Prevenção de contaminação por lençol freático",
      "Teste de estanqueidade após a conclusão"
    ],
    recommendedFor: "Reservatórios inferiores, cisternas enterradas e caixas superiores"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    title: "Revitalização de Fachada de Edifício Residencial",
    category: "fachada",
    location: "Belém - PA",
    description: "Tratamento de trincas, repintura com tinta elastomérica em tons cinza e azul-marinho, hidrojateamento e selagem total das esquadrias.",
    afterImage: "/src/assets/images/galeria_fachada_renovada_1792683689951.jpg",
    isBeforeAfter: false
  },
  {
    id: "2",
    title: "Trabalho em Altura com Andaime Suspenso e Linha de Vida",
    category: "fachada",
    location: "Região Metropolitana de Belém",
    description: "Pintores uniformizados executando demão de acabamento em edifício de alto padrão, cumprindo todos os requisitos da NR-35.",
    afterImage: "/src/assets/images/hero_fachada_predial_1792683688910.jpg",
    isBeforeAfter: false
  },
  {
    id: "3",
    title: "Impermeabilização Técnica com Manta Asfáltica a Maçarico",
    category: "impermeabilizacao",
    location: "Belém - PA",
    description: "Aplicação profissional de manta asfáltica com sobreposição controlada em laje superior exposta para eliminação de infiltrações crônicas.",
    afterImage: "/src/assets/images/servico_manta_telhado_1792683690362.jpg",
    isBeforeAfter: false
  },
  {
    id: "4",
    title: "Restauração de Fachada Comercial com Estrutura de Andaimes",
    category: "comercial",
    location: "Ananindeua - PA",
    description: "Recuperação de reboco deteriorado, proteção com tela fachadeira, reposição de pastilhas e pintura externa com tinta resistente a intempéries.",
    afterImage: "/src/assets/images/servico_revitalizacao_1792683689905.jpg",
    isBeforeAfter: false
  }
];

export const WORK_PROCESS_STEPS = [
  {
    number: "01",
    title: "Visita Técnica e Orçamento Gratuito",
    desc: "Avaliamos in loco as condições da fachada, infiltrações e necessidades estruturais sem nenhum custo ou compromisso."
  },
  {
    number: "02",
    title: "Proposta Clara e Cronograma Detalhado",
    desc: "Apresentamos proposta com especificação de materiais, etapas de execução e prazo garantido para apresentação em assembleia de condomínio."
  },
  {
    number: "03",
    title: "Execução Segura com NR-35",
    desc: "Isolamento da área, instalação de balancins e linhas de vida, aplicação de hidrojateamento e recuperação com controle diário."
  },
  {
    number: "04",
    title: "Entrega Técnica e Limpeza Final",
    desc: "Vistoria minuciosa junto ao síndico ou gestor, entrega do certificado de serviços e ambiente 100% limpo e organizado."
  }
];
