export const brand = {
  name: "Cybrinks",
  fullName: "Cybrinks Digital Trust",
  pillars: ["Segurança", "Auditoria", "Privacidade"],
};

export const contact = {
  name: "Filipe Loner da Fonseca",
  email: "filipeloner@gmail.com",
  phoneDisplay: "+55 (19) 98206-8838",
  whatsappUrl: "https://wa.me/5519982068838",
  linkedinUrl: "https://www.linkedin.com/in/filipelonerdafonseca/",
};

export const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Cases", href: "#cases" },
  { label: "Contratação", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  eyebrow: "Cybrinks Digital Trust",
  headline: "Segurança que protege o negócio.",
  subheadline:
    "Estratégias integradas para reduzir riscos, fortalecer a governança e gerar confiança.",
  tags: ["Proteção", "Conformidade", "Governança", "Resiliência"],
  ctaPrimary: { label: "Falar com um especialista", href: "#contato" },
  ctaSecondary: { label: "Ver serviços", href: "#servicos" },
  strapline: "Experiência • Estratégia • Resultado",
};

export const about = {
  heading: "Segurança para o negócio avançar.",
  lead: "Consultoria de tecnologia e segurança formada por profissionais com mais de 20 anos de experiência em TI. Unimos visão estratégica e conhecimento técnico para conectar Segurança da Informação, Inovação, Auditoria de TI e Privacidade aos objetivos de cada negócio.",
  mission:
    "Capacitar empresas a operarem com confiança no ambiente digital, garantindo conformidade regulatória, redução de riscos e fortalecimento da governança corporativa.",
  differentiators: [
    "Profissionais certificados",
    "Abordagem consultiva e estratégica",
    "Metodologias alinhadas aos padrões internacionais",
    "Foco em resultados mensuráveis",
  ],
};

export const challenges = {
  heading: "O desafio não é apenas evitar incidentes.",
  lead: "É manter o negócio resiliente, conforme e competitivo.",
  items: [
    {
      icon: "alert",
      title: "Ameaças crescentes",
      description:
        "Ataques cibernéticos sofisticados que comprometem a continuidade operacional.",
    },
    {
      icon: "scale",
      title: "Conformidade regulatória",
      description:
        "Exigências constantes de adaptação a normas como LGPD e ISO 27001.",
    },
    {
      icon: "trending-down",
      title: "Impactos financeiros",
      description:
        "Riscos de vazamento de dados que geram perdas financeiras e danos à reputação.",
    },
    {
      icon: "users",
      title: "Escassez de talentos",
      description:
        "Dificuldade das empresas em encontrar e reter especialistas em segurança e privacidade.",
    },
  ],
};

export const services = {
  heading: "Portfólio de serviços",
  lead: "Três eixos integrados para proteger, adequar e governar a operação digital do seu negócio.",
  groups: [
    {
      key: "seguranca",
      title: "Segurança da Informação",
      icon: "shield",
      items: [
        {
          title: "Análise de Vulnerabilidades",
          description:
            "Identificação proativa de falhas de segurança em sistemas, aplicações e infraestrutura.",
        },
        {
          title: "Pentest",
          description:
            "Simulação de ataques reais para testar a resistência dos controles e validar defesas.",
        },
        {
          title: "CISO as a Service",
          description: "Liderança estratégica de segurança sob demanda.",
        },
        {
          title: "Certificações ISO",
          description:
            "Consultoria para implementação e certificação em normas como a ISO 27001.",
        },
        {
          title: "SOC e Monitoramento",
          description:
            "Monitoramento contínuo de ameaças e resposta a incidentes 24/7.",
        },
        {
          title: "Treinamentos",
          description:
            "Conscientização e capacitação de equipes para criar uma cultura de proteção.",
        },
      ],
    },
    {
      key: "auditoria",
      title: "Auditoria de TI",
      icon: "search",
      items: [
        {
          title: "Auditoria de Controles",
          description:
            "Avaliação detalhada de controles internos de TI para identificar gaps e oportunidades.",
        },
        {
          title: "Compliance Assessment",
          description:
            "Verificação do alinhamento a normas regulatórias e padrões setoriais.",
        },
        {
          title: "Auditoria de Processos",
          description:
            "Análise da eficiência operacional de TI para reduzir custos e aumentar produtividade.",
        },
        {
          title: "Relatórios Executivos",
          description:
            "Documentação clara com achados, recomendações e planos de ação para a alta gestão.",
        },
      ],
      note: "Frameworks utilizados: COBIT, ITIL e NIST.",
    },
    {
      key: "privacidade",
      title: "Privacidade e DPO as a Service",
      icon: "lock",
      items: [
        {
          title: "Adequação à LGPD",
          description:
            "Mapeamento de dados pessoais, análise de riscos e implementação de medidas técnicas.",
        },
        {
          title: "DPO as a Service",
          description:
            "Encarregado de Proteção de Dados terceirizado para intermediação com ANPD, titulares e equipes.",
        },
        {
          title: "Políticas e Procedimentos",
          description:
            "Criação de políticas de privacidade, termos de uso, gestão de consentimento e resposta a incidentes.",
        },
        {
          title: "Treinamentos em Privacidade",
          description: "Capacitação de colaboradores sobre LGPD e boas práticas.",
        },
      ],
      highlight:
        "Privacidade não é apenas exigência legal. É diferencial competitivo e pilar da confiança do cliente.",
    },
  ],
};

export const methodology = {
  heading: "Como atuamos",
  lead: "Um processo estruturado em 5 etapas, do diagnóstico à melhoria contínua.",
  steps: [
    {
      title: "Diagnóstico Inicial",
      description:
        "Entendimento do contexto, ativos críticos e maturidade.",
    },
    {
      title: "Planejamento Estratégico",
      description:
        "Definição de escopo, objetivos, cronograma e critérios de sucesso.",
    },
    {
      title: "Execução e Testes",
      description:
        "Implementação de controles, auditorias e testes de validação.",
    },
    {
      title: "Análise e Relatórios",
      description:
        "Consolidação de achados, riscos e priorização de ações.",
    },
    {
      title: "Acompanhamento Contínuo",
      description:
        "Monitoramento, suporte à remediação e melhoria contínua.",
    },
  ],
};

export const caseStudy = {
  heading: "Case de sucesso",
  client: "Instituição Financeira de médio porte",
  challenge: "Adequação à LGPD e certificação ISO 27001.",
  timeline:
    "Diagnóstico em 90 dias, implementação dos controles em 6 meses, com conquista da certificação e validação da LGPD.",
  metrics: [
    { value: "85%", label: "Redução de riscos (vulnerabilidades críticas e médias)" },
    { value: "100%", label: "Conformidade LGPD" },
    { value: "40%", label: "Melhoria nos processos de TI" },
  ],
};

export const pricing = {
  heading: "Modelos de contratação",
  lead: "Formatos flexíveis para cada momento e necessidade do seu negócio.",
  plans: [
    {
      title: "Projetos Pontuais",
      description:
        "Pacotes de horas flexíveis, investimento único e escopo fechado — ideal para auditorias, pentests e certificações.",
    },
    {
      title: "Contratos Recorrentes",
      description:
        "Suporte contínuo para CISO/DPO as a Service, com acompanhamento mensal ou trimestral.",
    },
    {
      title: "SLA Personalizado",
      description:
        "Níveis de serviço e escopo adaptáveis às demandas específicas da empresa.",
    },
  ],
};

export const ctaFinal = {
  heading: "Pronto para fortalecer a segurança do seu negócio?",
  lead: "Fale com nossos especialistas e descubra como reduzir riscos, atender à conformidade regulatória e fortalecer a governança da sua empresa.",
};
