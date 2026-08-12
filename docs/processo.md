# Processo de trabalho — time de subagentes

Este projeto é conduzido por um time de **subagentes do Claude Code** (`.claude/agents/`),
cada um responsável por uma área. Todos operam sob o mesmo ciclo de qualidade.

## O ciclo: Criador → Validador → Refinador

Cada agente, dentro da sua área, executa três papéis internos:

1. **Criador** — produz a primeira versão do artefato (pesquisa, copy, componente, oferta).
2. **Validador** — confronta o artefato com um checklist objetivo da área e aprova ou
   devolve com apontamentos. Nada avança sem passar por aqui.
3. **Refinador** — aplica os apontamentos e otimiza (clareza, conversão, correção,
   performance) até o padrão de "pronto para publicar".

## Orquestração

O **maestro-orquestrador** mantém o objetivo do projeto (ser o e-book mais vendido do
Brasil no tema, com margem saudável), abre tarefas para os agentes de área, resolve
conflitos entre áreas (ex.: copy x compliance científico) e mantém o backlog de melhorias
até o lançamento.

Fluxo típico de uma tarefa:

```
maestro abre tarefa
        │
        ▼
  agente de área (Criador) ──► (Validador) ──► (Refinador)
        │                          │
        │        reprovado ◄───────┘
        ▼
  artefato aprovado ──► merge no repositório ──► maestro atualiza backlog
```

## Regras transversais (valem para todos)

- **Evidência antes de afirmação:** toda alegação de saúde precisa de fonte em
  `ebook/referencias.md`. Sem fonte, não publica.
- **Compliance:** nada de promessa de cura, resultado garantido de saúde ou linguagem que
  configure prática de nutrição/medicina. Conteúdo é educativo.
- **Marca:** não usar o nome comercial "DeRose" na página pública nem no e-book; usar os
  conceitos (yoga antigo, Sámkhya, alimentação sáttvica, ahimsa) de forma educativa.
- **Voz do autor:** ao integrar o material pessoal do usuário (receitas, textos), preservar
  a voz dele; validação nutricional não reescreve o tom.
- **Fonte única de verdade da copy:** textos da landing vivem em `web/content/`, não
  espalhados pelos componentes.

## Áreas e agentes

| Agente | Área |
|---|---|
| `nutricao-cientifica` | Nutrição vegana baseada em evidência |
| `filosofia-oriental` | Yoga antigo, Sámkhya, alimentação sáttvica |
| `copywriting-conversao` | Copy de resposta direta |
| `design-ux` | Direção de arte e UX de conversão |
| `frontend-eng` | Implementação da landing (Next.js/Tailwind) |
| `estrategia-vendas` | Oferta, preço, afiliados, funil, métricas |
| `maestro-orquestrador` | Coordenação do pipeline |
