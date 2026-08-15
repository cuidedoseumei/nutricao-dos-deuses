import { readFileSync, writeFileSync } from "fs";
import { marked } from "marked";

const CAP = "/home/user/nutricao-dos-deuses/ebook/manuscrito/capitulos";
const OUT =
  "/tmp/claude-0/-home-user-nutricao-dos-deuses/f5e389a2-5871-5e93-b852-b2676dc03978/scratchpad/ebook-print.html";

import { readdirSync } from "fs";
const order = readdirSync(CAP).filter(f => f.endsWith(".md")).sort().map(f => f.replace(/\.md$/, ""));

const toc = [];
let idc = 0;
const renderer = new marked.Renderer();
renderer.heading = ({ tokens, depth }) => {
  const text = tokens.map((t) => t.raw).join("");
  const id = "sec-" + ++idc;
  if (depth === 1) toc.push({ id, text, part: true });
  else if (depth === 2) toc.push({ id, text, part: false });
  return `<h${depth} id="${id}">${marked.parseInline(text)}</h${depth}>\n`;
};
marked.setOptions({ renderer });

let body = "";
for (const name of order) {
  let md = readFileSync(`${CAP}/${name}.md`, "utf8");
  if (name === "00-abertura") {
    const idx = md.indexOf("\n---");
    if (idx !== -1) md = md.slice(idx + 4);
  }
  body += `<section class="chap">\n${marked.parse(md)}\n</section>\n`;
}
body = body.replace(/<table>/g, '<div class="tbl"><table>').replace(/<\/table>/g, "</table></div>");

let tocHtml = '<section class="toc-page"><h2 class="toc-title">Índice</h2><ol class="toc">';
for (const t of toc) {
  tocHtml += `<li class="${t.part ? "toc-part" : "toc-ch"}"><a href="#${t.id}">${marked.parseInline(t.text)}</a></li>`;
}
tocHtml += "</ol></section>";

const words = body.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
const mil = Math.round(words / 1000);

const css = `
:root{
  --forest:#17362a;--forest2:#1f4a38;--leaf:#3e8e57;--gold:#a87d2c;--gold-bright:#e6c789;
  --paper:#ffffff;--ink:#2a2620;--ink-soft:#5b5648;--line:#dde0cf;--card:#faf8f0;
  --serif:Georgia,"Times New Roman",serif;--sans:-apple-system,system-ui,"Segoe UI",Arial,sans-serif;
  --mono:Menlo,Consolas,monospace;
}
*{box-sizing:border-box}
body{margin:0;background:#fff;color:var(--ink);font-family:var(--serif);line-height:1.7;font-size:11.2pt}
p{margin:0 0 .9rem;text-align:justify}
strong{font-weight:700}
a{color:var(--ink);text-decoration:none}

/* ---- CAPA ---- */
.cover-page{
  min-height:258mm;display:flex;flex-direction:column;align-items:center;justify-content:center;
  text-align:center;background:linear-gradient(160deg,var(--forest2),var(--forest));color:#f5f1ea;
  border-radius:6px;padding:3rem 2rem;break-after:page;
}
.cover-page .mandala{margin-bottom:2rem}
.cover-page .kicker{font-family:var(--sans);font-size:9pt;letter-spacing:.28em;text-transform:uppercase;color:var(--gold-bright);margin-bottom:1.4rem}
.cover-page h1{font-family:var(--serif);font-weight:700;font-size:44pt;line-height:1.05;margin:0;color:#f5f1ea}
.cover-page h1 .g{display:block;color:var(--gold-bright)}
.cover-page .sub{font-family:var(--sans);font-size:13pt;color:rgba(245,241,234,.85);margin-top:1.8rem;max-width:70%}
.cover-page .rule{width:60px;height:2px;background:var(--gold-bright);margin:2.4rem auto}
.cover-page .badge{font-family:var(--sans);font-size:9pt;letter-spacing:.1em;text-transform:uppercase;color:rgba(245,241,234,.75);border:1px solid rgba(245,241,234,.3);border-radius:999px;padding:.4rem 1.1rem}

/* ---- APRESENTAÇÃO ---- */
.intro-page{break-after:page;padding:1rem .4rem}
.intro-page .eyebrow{font-family:var(--sans);font-size:9pt;letter-spacing:.24em;text-transform:uppercase;color:var(--leaf);font-weight:700}
.intro-page h2{font-family:var(--serif);font-size:24pt;margin:.4rem 0 1.2rem;color:var(--forest)}
.intro-page h3{font-family:var(--sans);font-size:11pt;text-transform:uppercase;letter-spacing:.05em;color:var(--gold);margin:1.6rem 0 .6rem}
.intro-page .parts{list-style:none;padding:0;margin:.4rem 0 0}
.intro-page .parts li{border-left:3px solid var(--leaf);padding:.5rem 0 .5rem .9rem;margin-bottom:.7rem;font-family:var(--sans);font-size:10.5pt}
.intro-page .parts b{color:var(--forest)}
.intro-page .note{margin-top:1.8rem;background:var(--card);border:1px solid var(--line);border-left:4px solid var(--gold);border-radius:8px;padding:1rem 1.2rem;font-family:var(--sans);font-size:9.5pt;color:var(--ink-soft);text-align:left}

/* ---- ÍNDICE ---- */
.toc-page{break-after:page}
.toc-title{font-family:var(--serif);font-size:22pt;color:var(--forest);margin:0 0 1.2rem}
.toc{list-style:none;padding:0;margin:0;font-family:var(--sans);font-size:10.5pt}
.toc li{margin:.2rem 0}
.toc .toc-part{margin-top:.9rem;font-weight:700;font-family:var(--serif);font-size:12pt}
.toc .toc-part a{color:var(--gold)}
.toc .toc-ch a{color:var(--ink)}

/* ---- CONTEÚDO ---- */
h1{font-family:var(--sans);text-align:center;background:var(--forest);color:#f5f1ea;border-radius:8px;padding:2rem 1.2rem;margin:1.5rem 0 1.6rem;font-size:19pt;break-before:page}
h2::before{content:"";display:block;width:30px;height:12px;margin-bottom:.4rem;background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 14"><path d="M2 12C8 4 16 2 32 2c-2 8-10 11-30 10Z" fill="none" stroke="%233e8e57" stroke-width="1.6"/></svg>') no-repeat left center/contain}
h2{font-family:var(--serif);font-size:17pt;line-height:1.2;margin:1.8rem 0 .9rem;color:var(--forest);break-after:avoid}
h3{font-family:var(--sans);font-size:10.5pt;letter-spacing:.03em;text-transform:uppercase;color:var(--gold);margin:1.4rem 0 .5rem;break-after:avoid}
blockquote{background:var(--card);border:1px solid var(--line);border-left:4px solid var(--gold);border-radius:8px;padding:.9rem 1.1rem;margin:1.2rem 0;break-inside:avoid}
blockquote p{margin:0 0 .6rem;text-align:left}
blockquote p:last-child{margin:0}
ul,ol{margin:0 0 1rem;padding-left:1.3rem}
li{margin:.28rem 0}
.tbl{margin:1.1rem 0;break-inside:avoid}
table{border-collapse:collapse;width:100%;font-family:var(--sans);font-size:8.5pt}
th,td{border:1px solid var(--line);padding:.35rem .5rem;text-align:left;vertical-align:top}
th{background:var(--card);font-weight:700}
hr{border:none;margin:1.6rem auto;height:20px;width:110px;background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 24"><g fill="none" stroke="%233e8e57" stroke-width="1.2" stroke-linecap="round"><path d="M10 12h34M76 12h34"/><path d="M60 4c-5 3-7 6-7 8 0 2 2 5 7 8 5-3 7-6 7-8 0-2-2-5-7-8Z"/><path d="M60 6v12"/></g></svg>') no-repeat center/contain}
code{font-family:var(--mono);font-size:.85em;background:#eef5ef;padding:.05em .3em;border-radius:3px}
.chap{break-inside:auto}
`;

const html = `<title>Alimentação dos Deuses</title>
<meta charset="utf-8"/>
<style>${css}</style>

<section class="cover-page">
  <svg class="mandala" width="120" height="120" viewBox="0 0 100 100" aria-hidden="true">
    <g fill="none" stroke="#e6c789" stroke-width="1.2"><circle cx="50" cy="50" r="38"/><circle cx="50" cy="50" r="29"/><circle cx="50" cy="50" r="20"/></g>
    <path d="M50 18 C38 36 38 50 50 64 C62 50 62 36 50 18Z" fill="#5fae72"/>
    <line x1="50" y1="28" x2="50" y2="58" stroke="#14342B" stroke-width="1.4"/>
  </svg>
  <div class="kicker">E-book</div>
  <h1>Alimentação <span class="g">dos Deuses</span></h1>
  <div class="rule"></div>
  <p class="sub">Nutrição vegana com a clareza da ciência e a sabedoria milenar da Índia</p>
  <div style="flex:0 0 2.4rem"></div>
  <span class="badge">Prévia do manuscrito · ~${mil} mil palavras</span>
</section>

<section class="intro-page">
  <div class="eyebrow">Apresentação</div>
  <h2>Sobre este livro</h2>
  <p><em>Alimentação dos Deuses</em> não é mais uma dieta. É um encontro: de um lado, a
  <strong>ciência</strong> da nutrição vegetal — o que os estudos realmente mostram sobre proteína,
  minerais, vitaminas e absorção. Do outro, a <strong>sabedoria milenar da Índia</strong> — o yoga,
  a filosofia Sámkhya e o Ayurveda — somada à corrente dos <strong>alimentos vivos</strong>. Duas
  linguagens que, ao longo do livro, apontam para a mesma comida: fresca, vegetal, viva e
  consciente.</p>
  <p>A promessa é comer com mais <strong>energia, clareza e propósito</strong> — com a segurança de
  quem se apoia na evidência e a leveza de quem se inspira na tradição. Sem terrorismo nutricional,
  sem contagem de calorias, sem culpa. Um mapa claro para nutrir não só o corpo, mas o ser inteiro.</p>

  <h3>O que você vai encontrar</h3>
  <ul class="parts">
    <li><b>Parte I — A visão.</b> A filosofia indiana do alimento: os gunas, o Ayurveda, os koshas,
    o <em>ahimsa</em>, o alimento como luz e o comer por intuição.</li>
    <li><b>Parte II — O corpo.</b> A ciência sem neura: digestão e microbioma, proteína vegetal,
    <em>todos os minerais</em> em seções dedicadas, as vitaminas que exigem plano (B12, D, ômega-3)
    e a arte da absorção.</li>
    <li><b>Parte III — A prática.</b> Montar o prato, comer pelas estações, especiarias, alimentos
    orgânicos, sol, movimento e respiração — a teoria virando vida.</li>
  </ul>

  <div class="note"><strong>Nota:</strong> esta é uma <strong>prévia de trabalho</strong>. O
  capítulo de receitas está reservado ao conteúdo do autor. Conteúdo educativo — não substitui a
  orientação individual de nutricionista ou médico; qualquer tratamento de saúde deve ter
  acompanhamento profissional.</div>
</section>

${tocHtml}

<div class="content">
${body}
</div>`;

writeFileSync(OUT, html);
console.log("Gerado:", OUT, "| palavras:", words, "| índice:", toc.length);
