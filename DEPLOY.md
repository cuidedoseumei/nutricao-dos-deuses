# Deploy na Vercel

A landing (Next.js) fica na subpasta **`web/`**. Configuração de import na Vercel:

## Configurações do projeto
- **Root Directory:** `web`  ← essencial (o app não está na raiz do repositório)
- **Framework Preset:** `Next.js`  ← já forçado por `web/vercel.json`
- **Build Command / Output:** deixar no padrão do Next (automático)

## Variáveis de ambiente
| Variável | Valor |
|---|---|
| `NEXT_PUBLIC_HOTMART_CHECKOUT_URL` | `https://pay.hotmart.com/F107133690I` |
| `NEXT_PUBLIC_SITE_URL` | o domínio gerado pela Vercel (ex.: `https://nutricao-dos-deuses.vercel.app`) |

> O checkout já tem esse link como padrão no código, então funciona mesmo sem a env.
> A env serve para sobrescrever se o link mudar.

## Erro comum
**"No Output Directory named 'public' found"** → a Vercel está com Framework Preset =
"Other". Corrigir para **Next.js** (ou confiar no `web/vercel.json`, que já força isso) e
fazer **Redeploy**.
