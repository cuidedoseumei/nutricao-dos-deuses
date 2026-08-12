/**
 * Fonte única de verdade da copy da landing.
 * Editada pelo agente `copywriting-conversao` (validada em compliance).
 * Os componentes NÃO devem ter texto hardcoded — tudo vem daqui.
 */

export const site = {
  brand: "Alimentação dos Deuses",
  seloAutor: "por Cuide do seu Mei",
  checkoutUrl:
    process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL ||
    "https://pay.hotmart.com/SEU_PRODUTO",

  hero: {
    eyebrow: "E-book • Nutrição vegana + filosofia do yoga",
    title: "Alimente-se como os deuses",
    subtitle:
      "A ciência da nutrição vegana unida à sabedoria milenar do yoga — para você ter mais energia, clareza e saúde, com segurança e sem neura.",
    cta: "Quero comer como os deuses",
    reassurance: "Acesso imediato • Garantia de 7 dias • Pague com Pix ou cartão",
  },

  dor: {
    title: "Você virou vegano com o coração — mas vive na dúvida?",
    paragraphs: [
      "Ferro, B12, cálcio, iodo, proteína... quanto mais você lê, mais confuso fica. A informação é solta, contraditória e cheia de terrorismo nutricional.",
      "Você quer comer com consciência e ter energia de verdade — não seguir mais uma dieta restritiva e ansiosa.",
    ],
    pains: [
      "“Será que estou realmente nutrido?”",
      "“Preciso mesmo suplementar? O quê?”",
      "“Como monto um prato completo no dia a dia?”",
      "“E a tal da B12?”",
    ],
  },

  mecanismo: {
    title: "A ponte que faltava: ciência + sabedoria milenar",
    lead: "“Alimentação dos Deuses” não é dieta. É um jeito de comer que nutre o corpo (com base em evidência) e eleva a energia (com base na filosofia sáttvica do yoga).",
    pillars: [
      {
        title: "Sáttvico",
        text: "A tradição do yoga classifica os alimentos pela energia que promovem. O sáttvico — fresco, vegetal, vivo — é o que sustenta clareza e leveza.",
      },
      {
        title: "Científico",
        text: "O que a tradição intuiu, a nutrição moderna confirma: alimentos vegetais integrais são densos em nutrientes. Cada afirmação de saúde aqui tem fonte.",
      },
      {
        title: "Ahimsa",
        text: "A não-violência como raiz ética: comer de um jeito que faz bem a você e ao mundo. Propósito e prato no mesmo lugar.",
      },
    ],
  },

  aprender: {
    title: "O que você vai dominar",
    items: [
      {
        title: "Todos os minerais do corpo",
        text: "Ferro, cálcio, zinco, iodo, selênio e todos os outros: função, fontes veganas e como absorver melhor cada um.",
      },
      {
        title: "As vitaminas que exigem plano",
        text: "B12, vitamina D e ômega-3 explicadas sem complicação — o que suplementar e por quê.",
      },
      {
        title: "Proteína vegetal sem mistério",
        text: "Como obter todos os aminoácidos essenciais sem obsessão e sem combinar nada na mesma refeição.",
      },
      {
        title: "Biodisponibilidade na prática",
        text: "Deixar de molho, germinar, combinar com vitamina C: os truques que multiplicam o que você absorve.",
      },
      {
        title: "A filosofia sáttvica",
        text: "Sámkhya, os três gunas e o sentido de comer com consciência — a alma por trás do método.",
      },
      {
        title: "Receitas e prática",
        text: "Como montar o prato, cardápio de 7 dias, lista de compras e as receitas do autor.",
      },
    ],
  },

  prova: {
    title: "Embasado, não achismo",
    text: "Toda alegação de saúde do e-book se apoia em fontes reconhecidas — do posicionamento de sociedades de nutrição às fichas oficiais de nutrientes e a grandes estudos populacionais. Aqui você encontra clareza com responsabilidade.",
    badges: [
      "Baseado em evidência",
      "Sem promessas milagrosas",
      "Fontes citadas",
      "Feito para o dia a dia",
    ],
  },

  autor: {
    title: "De quem cuida de gente de verdade",
    text: "Nascido da missão do “Cuide do seu Mei”, este e-book reúne o cuidado com a saúde e a paixão por uma alimentação com propósito. Uma ponte entre o rigor da ciência e a leveza da tradição.",
  },

  oferta: {
    title: "Tudo o que está incluído",
    productName: "E-book Alimentação dos Deuses",
    productItems: [
      "A filosofia sáttvica e o sentido de comer com consciência",
      "A ciência descomplicada: proteína, todos os minerais, B12, D e ômega-3",
      "A prática: montagem do prato, suplementação e receitas do autor",
    ],
    bonusTitle: "Bônus inclusos",
    bonus: [
      {
        name: "Guia de Suplementação Essencial",
        text: "O que realmente suplementar — sem exagero nem desperdício.",
      },
      {
        name: "Cardápio Sáttvico de 7 dias",
        text: "Café, almoço, jantar e lanches, prontos para seguir.",
      },
      {
        name: "Lista de Compras Inteligente",
        text: "O que comprar na semana, organizada por seção do mercado.",
      },
      {
        name: "Tabela de Minerais de Bolso",
        text: "Fonte vegana + como absorver melhor, num resumo visual.",
      },
    ],
    priceLabel: "Oferta de lançamento",
    priceAnchor: "R$ 127",
    price: "R$ 47",
    priceNote: "à vista ou parcelado • acesso imediato",
    cta: "Garantir meu e-book agora",
  },

  garantia: {
    title: "Risco zero: garantia de 7 dias",
    text: "Leia, aplique e sinta. Se em 7 dias você não achar que valeu cada centavo, devolvemos 100% do valor — sem perguntas, sem burocracia.",
  },

  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Dieta vegana é realmente segura?",
        a: "Sim, quando bem planejada. Sociedades de nutrição reconhecem dietas veganas bem planejadas como adequadas para todas as fases da vida. O e-book te mostra exatamente como planejar.",
      },
      {
        q: "E a vitamina B12?",
        a: "A B12 é o único ponto realmente inegociável: precisa ser suplementada. O e-book explica de forma simples quanto, como e por quê.",
      },
      {
        q: "Preciso ser vegano para aproveitar?",
        a: "Não. Se você quer reduzir o consumo animal ou comer com mais consciência, o método serve como um mapa claro para começar com segurança.",
      },
      {
        q: "É muito técnico ou difícil?",
        a: "A ciência aparece descomplicada e sempre puxada para a prática: o que comprar, como montar o prato e o que suplementar. Nada de jargão inacessível.",
      },
      {
        q: "Como recebo o e-book?",
        a: "A compra é processada pela Hotmart e o acesso é imediato após a confirmação do pagamento (Pix, cartão ou boleto).",
      },
    ],
  },

  ctaFinal: {
    title: "Comece hoje a comer como os deuses",
    text: "Clareza, energia e propósito no seu prato — com a segurança de quem se apoia na ciência e na sabedoria milenar.",
    cta: "Quero começar agora",
  },

  footer: {
    disclaimer:
      "Conteúdo educativo. Não substitui a orientação individual de nutricionista ou médico. Resultados variam de pessoa para pessoa. Toda afirmação de saúde do material é referenciada em fontes reconhecidas.",
    rights: "Cuide do seu Mei",
  },

  obrigado: {
    title: "Bem-vindo à Alimentação dos Deuses!",
    text: "Sua compra foi confirmada. O acesso ao e-book e aos bônus foi liberado pela Hotmart — verifique também o seu e-mail. Qualquer dúvida, é só responder o e-mail de boas-vindas.",
    cta: "Voltar ao início",
  },
} as const;

export type Site = typeof site;
