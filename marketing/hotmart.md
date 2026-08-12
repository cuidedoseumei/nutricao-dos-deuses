# Configuração na Hotmart — checklist

Passo a passo para publicar o e-book e ligar o checkout à landing. Requer **acesso à sua
conta Hotmart** — as etapas marcadas com 🔑 dependem de você.

## 1. Produto
- [ ] 🔑 Criar conta/produtor na Hotmart (se ainda não tiver).
- [ ] 🔑 Cadastrar o produto: tipo **e-book**, categoria saúde/alimentação.
- [ ] Título, descrição e imagem de capa (usar identidade de `docs/brand.md`).
- [ ] Fazer upload do **PDF do e-book** + arquivos dos bônus como entrega digital.
- [ ] Definir a página de obrigado/entrega (área de membros ou download direto).

## 2. Preço e pagamento
- [ ] 🔑 Definir preço (sugestão: R$ 47 — ver `oferta.md`).
- [ ] Habilitar **parcelamento** e principais meios de pagamento (cartão, Pix, boleto).
- [ ] Configurar a **garantia de 7 dias** (reembolso).

## 3. Checkout
- [ ] Escolher o modelo de checkout Hotmart (checkout transparente ou página Hotmart).
- [ ] Copiar o **link de checkout/página de vendas** do produto.
- [ ] Colar esse link na variável de ambiente da landing:
      `NEXT_PUBLIC_HOTMART_CHECKOUT_URL` (ver `web/.env.example`).
- [ ] Testar uma compra de ponta a ponta (modo teste, se disponível).

## 4. Programa de afiliados
- [ ] 🔑 Ativar o produto no **marketplace de afiliados**.
- [ ] Definir **comissão** (sugestão: 60% — ver `afiliados.md`).
- [ ] Escolher afiliação automática ou com aprovação.
- [ ] Subir o **kit de divulgação** (criativos + copy) na área de materiais do afiliado.

## 5. Rastreamento e integrações
- [ ] Conectar **pixel** (Meta/Google) para otimizar tráfego pago.
- [ ] Integrar e-mail/CRM para a sequência do funil (ver `funil.md`).
- [ ] Configurar UTM nos links para medir origem das vendas.

## 6. Publicação
- [ ] 🔑 Enviar o produto para **análise/aprovação** da Hotmart.
- [ ] Após aprovado, apontar a landing para o checkout e publicar.

> Quando você me der o link de checkout, eu ligo a landing a ele em segundos. Até lá, o botão
> usa um placeholder configurável por env, então nada quebra.
