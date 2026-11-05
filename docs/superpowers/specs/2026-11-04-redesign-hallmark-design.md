# Redesign da home com Hallmark — 2026-11-04

Branch `redesign/hallmark`, criada a partir de `dev-0004-widget`. A `main` (o site no ar) não muda.

## Objetivo

Deixar o brhorn.com com cara de feito, não de gerado, para o dono de empresa que vai contratar
agentes de IA. A ação principal continua **Fazer diagnóstico**, e a secundária é a ligação ou o WhatsApp.

## Decisões aprovadas (bloco de escolhas, 2026-11-04)

- **Profundidade:** redesign completo da home. O cabeçalho, o rodapé e os tokens valem para o site inteiro. As
  páginas `/configuracao-de-agentes`, `/axion` e `/viaserra` ficam para a próxima etapa.
- **Fica:** os textos, todos os links e handlers (registrados em `.hallmark/before.json`) e a marca:
  papel `#f7f6f2`, nanquim `#161a3a`, azul `#1f6feb` / `#1a3b9c`, IBM Plex Sans + Jost.
- **Logo:** monograma **brh** híbrido (`Logos/vetor/brh-hibrido/` no QG). Ele lê b·r·h·o·r·n.
- **Forma:** Feature Stack, sorteio `f4d350`. A navegação é um cabeçalho fixo de 64 px, só com o monograma, sem o nome escrito (2026-11-05). O hero é do tipo Banner, em uma coluna e sem ilustração.
  O rodapé fecha como uma carta.
- **Assinatura:** o brh do cabeçalho acende b → r → h → o → r → n ao carregar e para na pose inteira; repete ao passar o mouse ou focar o logo (2026-11-05; saiu do hero).
- **Seções:** Hero, Casos, Problemas, Áreas, Fases (fixas à esquerda), Segurança (a única faixa escura),
  Quem faz, Agente pessoal e Rodapé-carta (absorve a seção de Contato).
- **Também corrige:** contraste do texto cinza (≥ 4,5:1), anel de foco visível, `.revelar` visível
  sem JavaScript, nenhum `transition-all`, e o rótulo em caixa alta e mono antes dos títulos sai.

## Plano

1. Tokens (`src/styles/tokens.css`) + carimbo e imports em `src/index.css`; classe `.js` no `<html>`.
2. `BrhMark` / `Logo` novos, `BrhAnimado`, `SiteHeader`, `HeroSection`. Depois o sloplint do hero e
   a **revisão com o usuário**.
3. As seções, na ordem acima, e o rodapé-carta. Depois a varredura (`sloplint --render --kept`),
   `npm run build` e a comparação em `.hallmark/compare.html`.
4. Favicon novo a partir de `brhorn-brh-favicon.svg`.

## Fora de escopo

Páginas internas, og-image, Termos de Uso, merge na `main`.

## Estado (2026-11-05)

Passos 1 a 4 feitos na branch, sem commit. Home: 0 FAIL no sloplint; links 18/18 e handlers 45/45 contra o
`before.json`. `npm run build` passa. O `ContatoSection` e os antigos `Eyebrow`/`H2` foram para
`src/components/legado/`, porque as páginas internas ainda os usam; saem quando elas forem refeitas.
Falta o retrato em Quem faz (espaço `data-slot="retrato"`, foto quadrada).
