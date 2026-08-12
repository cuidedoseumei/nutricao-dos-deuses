# Alimentação dos Deuses

Projeto do e-book **"Alimentação dos Deuses"** — nutrição vegana com fundamentação
científica unida à filosofia oriental (yoga antigo, Sámkhya, alimentação sáttvica) — e da
**página de vendas de alta conversão** que o comercializa.

Objetivo: tornar-se o e-book mais vendido do Brasil no tema, com distribuição via
**Hotmart** (checkout + programa de afiliados).

## Estrutura do repositório

```
.claude/agents/   Time de subagentes (um por área: criação → validação → refino)
web/              Landing de vendas (Next.js App Router + Tailwind)
ebook/            Pesquisa, manuscrito e bibliografia do e-book
  pesquisa/         Research por área (minerais, ciência, filosofia)
  manuscrito/       Capítulos em Markdown (inclui material do autor)
  referencias.md    Bibliografia citável
marketing/        Oferta, funil, afiliados e copy
docs/             Processo dos agentes e identidade de marca
```

## Como trabalhamos (subagentes)

Cada área tem um subagente que roda o ciclo **Criador → Validador → Refinador**, coordenado
por um **maestro**. Detalhes em [`docs/processo.md`](docs/processo.md).

## A landing (web/)

```bash
cd web
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Aviso

Conteúdo educativo. Não substitui orientação individual de nutricionista ou médico.
Toda afirmação de saúde é referenciada em [`ebook/referencias.md`](ebook/referencias.md).
