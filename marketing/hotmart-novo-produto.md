# Passo a passo — criar o produto novo na Hotmart

Guia para cadastrar **Os Pilares da Alimentação Viva** como um produto novo (já que a
renomeação do produto antigo não foi possível).

> ⚠️ **Atenção — o link de checkout vai mudar.** O produto atual usa
> `https://pay.hotmart.com/F107133690I`. O produto novo terá **outro código**. Depois de criar,
> me mande o novo link que eu atualizo a landing (ou siga a Etapa 8 para fazer você mesmo).

---

## Etapa 1 — Criar o produto

1. Acesse **hotmart.com** → entre na sua conta → menu **Produtos** → **Cadastrar produto**.
2. Escolha o formato **E-book** (ou "Arquivos/PDF", conforme a Hotmart apresentar).
3. **Nome do produto:**
   ```
   Os Pilares da Alimentação Viva
   ```

## Etapa 2 — "Sobre o que é o seu produto?" (limite 500 caracteres)

Cole exatamente este texto (454 caracteres):

```
Os cinco pilares da alimentação viva: um guia completo de nutrição vegetal que une a ciência
à sabedoria milenar do yoga e do Ayurveda. Ensina, de forma prática e sem neura, como se
alimentar de plantas com energia, vitalidade e longevidade: todos os minerais do corpo, a
B12, o ferro, o cálcio e as vitaminas que exigem plano, como montar o prato, comer pelas
estações e o que suplementar. Inclui receitas, semana de nutrição e lista de compras.
```

## Etapa 3 — Imagem do produto

- Gere a capa com o **prompt 1** de `prompts-imagem-capa.md` (flat lay de alimentos vivos).
- Formato **quadrado (1:1)**, bem iluminada, **menor que 5 MB**.
- Suba em **Escolha a imagem do produto** → **Confirmar imagem**.

## Etapa 4 — Dados básicos

| Campo | O que preencher |
|---|---|
| **Categoria** | Saúde e Bem-estar (ou Educação, conforme a lista) |
| **Idioma** | Português (Brasil) |
| **Formato** | E-book / PDF |
| **Público** | Veganos, vegetarianos e quem quer reduzir o consumo animal com saúde |

## Etapa 5 — Preço e garantia

- **Preço:** `R$ 59,00`
- **Preço de referência / "de":** `R$ 199,00` (se o campo existir)
- **Garantia:** `7 dias`
- **Pagamento:** habilitar **cartão, Pix e boleto** e o **parcelamento**

## Etapa 6 — Entrega do conteúdo

- Fazer upload do **PDF do e-book** + os arquivos dos **bônus**.
- Se a Hotmart oferecer área de membros (Club), pode usar; para e-book simples, a entrega por
  download direto já resolve.

## Etapa 7 — Programa de afiliados

1. Abrir a aba **Afiliação / Afiliados** do novo produto.
2. **Ativar** o programa e listar no **Marketplace**.
3. **Comissão: 50%**
4. Tipo de comissionamento: **último clique** (padrão).
5. Descrição para afiliados — colar:
   ```
   Promova um guia de alimentação viva e nutrição vegetal que une ciência, yoga e Ayurveda.
   Ticket acessível (R$ 59, de R$ 199), com bônus e garantia de 7 dias — alta conversão e
   comissão de 50%. Público apaixonado: veganos, vegetarianos e quem busca mais energia,
   vitalidade e uma vida consciente. Kit de divulgação pronto (posts, Stories, Reels e e-mail).
   ```
6. Subir os materiais do kit (`marketing/copy/kit-afiliados.md`).

## Etapa 8 — Pegar o novo link e atualizar a landing 🔴

1. Na aba de **divulgação/links** do novo produto, copie o link da **Página de pagamento**
   (o que começa com `https://pay.hotmart.com/...`).
2. Atualize em **dois lugares**:
   - **Vercel** → projeto → **Settings → Environment Variables** →
     `NEXT_PUBLIC_HOTMART_CHECKOUT_URL` = *novo link* → **Save** → **Redeploy**.
   - **Código** (padrão de fallback): `web/content/site.ts`, campo `checkoutUrl`.
3. Teste clicando no botão da landing — deve abrir o checkout do produto novo.

> Me mande o link novo e eu faço a Etapa 8 inteira para você.

## Etapa 9 — Enviar para aprovação

- Enviar o produto para **análise da Hotmart** e aguardar a aprovação.

## Etapa 10 — Encerrar o produto antigo

Depois que o novo estiver aprovado e vendendo:

- Abra o produto antigo ("Alimentação dos Deuses") e **pause / despublique** (não exclua se já
  houver vendas — o histórico e o suporte aos compradores precisam continuar existindo).
- Desative o programa de afiliados dele, para ninguém divulgar o link velho.
- Se alguém já comprou o antigo, vale enviar o e-book novo como cortesia — custa nada e gera
  boa vontade.

---

## Checklist rápido

- [ ] Produto criado com o nome novo
- [ ] Descrição colada (454 caracteres)
- [ ] Capa quadrada enviada
- [ ] Preço R$ 59 + garantia de 7 dias
- [ ] PDF e bônus subidos
- [ ] Afiliados ativados com 50%
- [ ] **Novo link de checkout atualizado na landing**
- [ ] Produto enviado para aprovação
- [ ] Produto antigo pausado
