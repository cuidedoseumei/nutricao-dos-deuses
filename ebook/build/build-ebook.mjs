import { readFileSync, writeFileSync, readdirSync } from "fs";
import { marked } from "marked";

const CAP = "/home/user/nutricao-dos-deuses/ebook/manuscrito/capitulos";
const OUT =
  "/tmp/claude-0/-home-user-nutricao-dos-deuses/f5e389a2-5871-5e93-b852-b2676dc03978/scratchpad/ebook-preview.html";

const order = readdirSync(CAP)
  .filter((f) => f.endsWith(".md"))
  .sort()
  .map((f) => f.replace(/\.md$/, ""));

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
body = body
  .replace(/<table>/g, '<div class="tbl"><table>')
  .replace(/<\/table>/g, "</table></div>");

let tocHtml =
  '<nav class="toc" id="indice" aria-label="Índice"><div class="toc-head"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21c-4-4-7-7.5-7-11a7 7 0 0 1 14 0c0 3.5-3 7-7 11Z" stroke="currentColor" stroke-width="1.5"/><path d="M12 21V8" stroke="currentColor" stroke-width="1.2"/></svg><span>Índice</span></div><ol>';
for (const t of toc) {
  const cls = t.part ? ' class="toc-part"' : "";
  tocHtml += `<li${cls}><a href="#${t.id}">${marked.parseInline(t.text)}</a></li>`;
}
tocHtml += "</ol></nav>";

const words = body.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;

const css = `
:root{
  /* Paleta natureza — tema claro (papel quente + floresta) */
  --ground:#f6f3ea;
  --surface:#fdfbf5;
  --surface-2:#eef0e4;
  --ink:#26302a;
  --ink-soft:#5d675f;
  --line:#dde0cf;
  --forest:#17362a;
  --forest-2:#1f4a38;
  --leaf:#3e8e57;
  --leaf-deep:#2c6b42;
  --sun:#a87d2c;
  --sun-bright:#e6c789;
  --on-forest:#f2efe4;
  --serif:"Iowan Old Style","Palatino Linotype",Palatino,Georgia,"Times New Roman",serif;
  --sans:ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  --measure:42rem;
}
@media (prefers-color-scheme:dark){
  :root:not([data-theme="light"]){
    --ground:#101713;--surface:#17211b;--surface-2:#1b2620;
    --ink:#e8e5d8;--ink-soft:#a8b0a2;--line:#28352d;
    --forest:#0c1a13;--forest-2:#14261c;
    --leaf:#5fae72;--leaf-deep:#7cc28d;--sun:#d9ad55;--sun-bright:#d9ad55;
    --on-forest:#e8e5d8;
  }
}
:root[data-theme="dark"]{
  --ground:#101713;--surface:#17211b;--surface-2:#1b2620;
  --ink:#e8e5d8;--ink-soft:#a8b0a2;--line:#28352d;
  --forest:#0c1a13;--forest-2:#14261c;
  --leaf:#5fae72;--leaf-deep:#7cc28d;--sun:#d9ad55;--sun-bright:#d9ad55;
  --on-forest:#e8e5d8;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;background:var(--ground);color:var(--ink);
  font-family:var(--serif);font-size:1.06rem;line-height:1.78;
  -webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;
}
p{margin:0 0 1.15rem}
strong{font-weight:700}
em{font-style:italic}
a{color:var(--leaf-deep)}
::selection{background:var(--sun-bright);color:var(--forest)}

/* barra de progresso de leitura */
#progress{position:fixed;top:0;left:0;height:3px;width:0;background:linear-gradient(90deg,var(--leaf),var(--sun-bright));z-index:50}

/* capa */
.cover{
  position:relative;overflow:hidden;text-align:center;color:var(--on-forest);
  background:radial-gradient(120% 90% at 50% -10%, var(--forest-2) 0%, var(--forest) 62%);
  padding:5.5rem 1.5rem 4.5rem;
}
.cover .botanic{position:absolute;opacity:.14;pointer-events:none}
.cover .botanic.tl{top:-40px;left:-30px;transform:rotate(-15deg)}
.cover .botanic.br{bottom:-50px;right:-30px;transform:rotate(160deg)}
.cover .mark{margin:0 auto 1.6rem;display:block}
.cover .kicker{font-family:var(--sans);font-size:.72rem;letter-spacing:.32em;text-transform:uppercase;color:var(--sun-bright);margin-bottom:1.1rem}
.cover h1{font-family:var(--serif);font-weight:700;font-size:clamp(2.5rem,8vw,3.7rem);line-height:1.06;margin:0;text-wrap:balance;color:var(--on-forest);background:none;padding:0;border-radius:0}
.cover h1 .g{display:block;color:var(--sun-bright)}
.cover h1::after{content:none}
.cover .sub{font-family:var(--sans);font-size:1.02rem;line-height:1.6;color:rgba(242,239,228,.82);max-width:30rem;margin:1.6rem auto 0}
.cover .sep{width:64px;height:2px;background:var(--sun-bright);margin:2.2rem auto;border-radius:2px}
.cover .badge{display:inline-block;font-family:var(--sans);font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(242,239,228,.75);border:1px solid rgba(242,239,228,.3);border-radius:999px;padding:.45rem 1.2rem}

/* leitura */
.reader{max-width:var(--measure);margin:0 auto;padding:0 1.35rem 5rem}
@media(min-width:640px){.reader{padding:0 2rem 5rem}}

/* índice */
.toc{background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:1.6rem 1.7rem;margin:2.8rem 0;font-family:var(--sans);box-shadow:0 1px 2px rgba(23,54,42,.05)}
.toc-head{display:flex;align-items:center;gap:.55rem;font-size:.74rem;letter-spacing:.2em;text-transform:uppercase;color:var(--leaf-deep);font-weight:700;margin-bottom:1rem}
.toc ol{margin:0;padding:0;list-style:none}
@media(min-width:720px){.toc ol{columns:2;column-gap:2.5rem}}
.toc li{margin:.3rem 0;font-size:.93rem;break-inside:avoid}
.toc li a{color:var(--ink);text-decoration:none;display:inline-block;padding:.12rem 0}
.toc li a:hover{color:var(--leaf-deep)}
.toc .toc-part{margin-top:1.05rem;font-family:var(--serif);font-weight:700;font-size:1.05rem}
.toc .toc-part:first-child{margin-top:0}
.toc .toc-part a{color:var(--sun)}

/* faixas de parte (h1) */
h1{
  position:relative;overflow:hidden;font-family:var(--serif);text-align:center;
  background:radial-gradient(140% 120% at 50% -20%, var(--forest-2), var(--forest));
  color:var(--on-forest);border-radius:18px;padding:3rem 1.5rem;margin:4.5rem 0 2.4rem;
  font-size:clamp(1.5rem,4.5vw,2rem);letter-spacing:.01em;text-wrap:balance;
}
h1::after{
  content:"";position:absolute;right:-24px;bottom:-50px;width:190px;height:190px;opacity:.13;
  background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 6C30 28 24 48 30 66c5 15 14 24 20 28 6-4 15-13 20-28 6-18 0-38-20-60Z" fill="none" stroke="%23e6c789" stroke-width="2"/><path d="M50 16v70M50 34c-6 3-11 8-13 13M50 34c6 3 11 8 13 13M50 52c-7 3-12 9-14 15M50 52c7 3 12 9 14 15" fill="none" stroke="%23e6c789" stroke-width="1.4"/></svg>') no-repeat center/contain;
  transform:rotate(24deg);
}

/* capítulos (h2) */
h2{
  font-family:var(--serif);font-size:clamp(1.45rem,3.6vw,1.7rem);line-height:1.22;
  margin:3.4rem 0 1.1rem;color:var(--ink);text-wrap:balance;
}
h2::before{
  content:"";display:block;width:34px;height:14px;margin-bottom:.65rem;
  background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 14"><path d="M2 12C8 4 16 2 32 2c-2 8-10 11-30 10Z" fill="none" stroke="%233e8e57" stroke-width="1.6"/></svg>') no-repeat left center/contain;
}
h2+p::first-letter{
  font-size:3.2em;float:left;line-height:.82;padding:.06em .12em 0 0;
  color:var(--leaf-deep);font-weight:700;
}
h3{
  font-family:var(--sans);font-size:.83rem;letter-spacing:.14em;text-transform:uppercase;
  color:var(--sun);margin:2.2rem 0 .7rem;font-weight:700;
}

/* citações */
blockquote{
  background:var(--surface);border:1px solid var(--line);border-left:4px solid var(--leaf);
  border-radius:14px;padding:1.15rem 1.4rem;margin:1.9rem 0;
  box-shadow:0 1px 2px rgba(23,54,42,.04);
}
blockquote p{margin:0 0 .75rem}
blockquote p:last-child{margin:0}
blockquote h2+p::first-letter,blockquote p::first-letter{font-size:inherit;float:none;padding:0;color:inherit;font-weight:inherit}

/* listas, tabelas, divisores */
ul,ol{margin:0 0 1.25rem;padding-left:1.35rem}
li{margin:.42rem 0}
li::marker{color:var(--leaf)}
.tbl{overflow-x:auto;margin:1.6rem 0;border:1px solid var(--line);border-radius:12px}
table{border-collapse:collapse;width:100%;font-family:var(--sans);font-size:.85rem;min-width:520px}
th,td{border-bottom:1px solid var(--line);padding:.55rem .75rem;text-align:left;vertical-align:top}
tr:last-child td{border-bottom:none}
th{background:var(--surface-2);font-weight:700;color:var(--ink)}
hr{
  border:none;margin:2.8rem auto;height:24px;width:120px;opacity:.8;
  background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 24"><g fill="none" stroke="%233e8e57" stroke-width="1.2" stroke-linecap="round"><path d="M10 12h34M76 12h34"/><path d="M60 4c-5 3-7 6-7 8 0 2 2 5 7 8 5-3 7-6 7-8 0-2-2-5-7-8Z"/><path d="M60 6v12"/></g></svg>') no-repeat center/contain;
}
code{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.85em;background:var(--surface-2);padding:.1em .38em;border-radius:5px}
.chap{scroll-margin-top:1.2rem}
.foot{max-width:var(--measure);margin:2.5rem auto 0;padding:1.6rem 1.35rem;font-family:var(--sans);font-size:.78rem;color:var(--ink-soft);text-align:center;border-top:1px solid var(--line)}

/* botão flutuante: voltar ao índice */
#toTop{
  position:fixed;right:1rem;bottom:1rem;z-index:40;
  display:flex;align-items:center;gap:.45rem;
  font-family:var(--sans);font-size:.8rem;font-weight:600;
  background:var(--forest);color:var(--on-forest);border:1px solid rgba(242,239,228,.2);
  border-radius:999px;padding:.62rem 1rem;text-decoration:none;
  box-shadow:0 6px 18px rgba(12,26,19,.28);opacity:0;transform:translateY(8px);
  transition:opacity .25s,transform .25s;pointer-events:none;
}
#toTop.show{opacity:1;transform:none;pointer-events:auto}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}#toTop{transition:none}}
`;

const botanicSvg = `<svg class="botanic tl" width="260" height="260" viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="#e6c789" stroke-width="1"><path d="M20 90C30 60 45 40 80 12"/><path d="M34 62c-8-2-13-7-15-14 8-1 14 2 18 8M45 48c-8-2-13-7-15-14 8-1 14 2 18 8M57 35c-8-2-12-6-14-13 8-1 13 2 17 7M68 24c-7-2-11-6-13-12 7-1 12 2 16 7"/><path d="M40 74c2-8 7-13 14-15 1 8-2 14-8 18M51 60c2-8 7-13 14-15 1 8-2 14-8 18M62 47c2-7 6-12 13-14 1 7-2 13-7 17"/></g></svg>`;

const html = `<title>Os Pilares da Alimentação Viva</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>${css}</style>
<div id="progress" aria-hidden="true"></div>

<header class="cover">
  ${botanicSvg}
  ${botanicSvg.replace('class="botanic tl"', 'class="botanic br"')}
  <svg class="mark" width="88" height="88" viewBox="0 0 100 100" aria-hidden="true">
    <circle cx="50" cy="50" r="44" fill="none" stroke="#e6c789" stroke-width="1.1" opacity=".7"/>
    <circle cx="50" cy="50" r="36" fill="none" stroke="#e6c789" stroke-width="1.4"/>
    <path d="M50 22C36 40 32 54 38 66c4 8 9 12 12 14 3-2 8-6 12-14 6-12 2-26-12-44Z" fill="none" stroke="#e6c789" stroke-width="1.2"/>
    <path d="M50 30v46M50 42c-4 2-7 5-9 9M50 42c4 2 7 5 9 9M50 56c-5 2-8 6-10 11M50 56c5 2 8 6 10 11" fill="none" stroke="#5fae72" stroke-width="1.6"/>
  </svg>
  <div class="kicker">E-book · Nutrição vegetal</div>
  <h1>Os Pilares <span class="g">da Alimentação Viva</span></h1>
  <div class="sep"></div>
  <p class="sub">Nutrição vegetal, minerais e a sabedoria milenar do yoga e do Ayurveda.</p>
  <div style="height:2.1rem"></div>
  <span class="badge">Prévia do manuscrito · ~${(words / 1000).toFixed(0)} mil palavras · rascunho v4</span>
</header>

<main class="reader">
  ${tocHtml}
  ${body}
</main>
<div class="foot">Prévia do manuscrito para revisão — o capítulo das receitas está reservado ao conteúdo do autor.<br/>Material educativo; não substitui orientação de nutricionista ou médico.</div>

<a href="#indice" id="toTop" aria-label="Voltar ao índice">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21c-4-4-7-7.5-7-11a7 7 0 0 1 14 0c0 3.5-3 7-7 11Z" stroke="currentColor" stroke-width="2"/></svg>
  Índice
</a>

<script>
(function(){
  var bar=document.getElementById('progress'),btn=document.getElementById('toTop');
  function onScroll(){
    var h=document.documentElement,max=h.scrollHeight-h.clientHeight;
    bar.style.width=(max>0?(h.scrollTop/max)*100:0)+'%';
    btn.classList.toggle('show',h.scrollTop>900);
  }
  addEventListener('scroll',onScroll,{passive:true});onScroll();
})();
</script>`;

writeFileSync(OUT, html);
console.log("Gerado:", OUT);
console.log("Palavras:", words, "| índice:", toc.length);
