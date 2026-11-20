# Home brhorn · Clareza da oferta e caminho até o contato

**Data** 14/11/2026  
**Base** `design/abertura-direcao-a`, incluindo as alterações locais da Direção A  
**Prévia da revisão** `http://localhost:4174/`

## Objetivo

Quem chega à home deve entender quais rotinas a brhorn automatiza, o que continua sob decisão humana e o que acontece depois de iniciar uma conversa. A jornada principal começa com uma rotina da empresa. Quem procura o agente pessoal continua encontrando acesso à página dedicada.

A revisão encontrou o CTA visível e ausência de rolagem horizontal geral em 360, 390, 768, 1024 e 1366 px. O exemplo de notas fiscais aparece a partir de 1024 px. Em 390 px, o cabeçalho perde a navegação, a faixa de casos perde as setas e o botão fixo cobre parte do texto durante a leitura. Na prévia, o CTA “Fazer diagnóstico” abre o WhatsApp, enquanto a palavra “Diagnóstico” também nomeia a primeira fase do projeto, que entrega um mapa de oportunidades.

## Escopo e referências

- A home é institucional e atende mais de uma intenção. Manter o título da Direção A, a identidade de papel, azul e nanquim, as famílias Jost, IBM Plex Sans e IBM Plex Mono, os tokens e o logo animado. Manter as faixas escuras de Casos e Segurança como decisões visuais da branch.
- Preservar os destinos atuais de produtos e documentos legais, o acesso à ligação e as âncoras existentes. Mudanças em componentes compartilhados exigem verificação nas páginas internas. A publicação é uma etapa posterior à revisão das entregas.
- Usar a voz já adotada pela brhorn. Falar em primeira pessoa quando Rodrigo responde ou projeta. Usar fatos registrados no projeto. O exemplo de notas é ilustrativo e precisa ser identificado como tal. Usar apenas materiais próprios e autorizados na demonstração de documentos e nos casos. Os casos existentes e a página do Axion são a referência para histórico. A menção a “aberto para piloto” na skill local precisa de confirmação comercial antes de virar texto público.
- Referências do repositório: [redesign anterior](2026-11-04-redesign-hallmark-design.md) e [Landing Page Design](../../../.claude/skills/landing-page-design/SKILL.md).

## T1 · Abertura e primeiro contato

**Prioridade alta.** Esta entrega define os rótulos usados em T2 e os pontos de origem usados em T5.

### Comportamento e texto

1. Manter “A IA já chegou na sua empresa. Agora ela vai trabalhar.” no H1. Usar como versão inicial da frase de apoio: “Projeto agentes de IA para rotinas como conferir notas, registrar pedidos e preparar relatórios. Sua equipe revisa as exceções antes de seguir.”
2. Na abertura abaixo de `lg`, mostrar entre o texto de apoio e a ação principal: “Exemplo: de 14 notas recebidas, 12 foram lançadas e 2 ficaram para revisão.” Em `lg` e acima, manter o painel completo, com a última linha destacada. Derivar ambas as apresentações do conteúdo do mesmo exemplo. Cada tamanho expõe apenas a apresentação correspondente à leitura assistiva.
3. Quando a ação abrir o WhatsApp, usar **Contar minha rotina no WhatsApp** na abertura e no fechamento. Usar uma versão curta e explícita no controle flutuante caso ele seja mantido em T2. Pré-preencher uma mensagem sem dados pessoais pedindo para conversar sobre uma rotina. Perto do CTA da abertura, usar “Na primeira conversa, vemos se a rotina faz sentido para um agente e por onde começar.” O compromisso de resposta em até um dia útil continua associado ao formulário onde já existe.
4. Respeitar os dois modos de `VITE_DIAGNOSTICO_ATIVO`. No modo com chat ativo, a ação que dispara o widget deve nomear o chat do site, por exemplo **Conversar pelo chat**. O link direto de WhatsApp no fechamento pode continuar como canal próprio nesse modo. O cabeçalho pode usar um rótulo compacto, com nome acessível que explicite o WhatsApp. Ligação e contato escrito têm hierarquia secundária.
5. Reservar “Diagnóstico” para a fase que entrega o mapa de oportunidades. Revisar também o texto da chamada em Rotinas, para que a conversa inicial e a fase do projeto sejam descritas de maneira consistente. Preservar o comportamento e os rótulos das rotas internas, parametrizando os componentes compartilhados onde a mudança for exclusiva da home.

**Arquivos de partida** `src/components/home/HeroSection.tsx`, `FechoPessoal.tsx`, `SiteHeader.tsx`, `AreasSection.tsx`, `src/content/consultoriaAgentes.ts`, `src/lib/contato.ts`, `src/components/diagnostico/BotaoDiagnostico.tsx`, `src/pages/Index.tsx`.

**Aceite** Em 390 × 844, numa primeira visita, H1, exemplo compacto e CTA primário ficam visíveis sem rolar e o aviso de cookies deixa o CTA acionável. Em 1366 × 768, o painel completo mostra o fluxo e a exceção. Conferir também 360 e 768 px para legibilidade. Em builds locais dos dois modos, inspecionar o destino `wa.me` e o texto pré-preenchido ou abrir o chat e comprovar a abertura sem iniciar conversa real. Abrir e fechar os dois modais. Validar o fechamento e o cabeçalho de acordo com o destino efetivo da ação.

## T2 · Navegação móvel e leitura

**Prioridade alta.** Pode ser desenvolvida em paralelo com T1, coordenando os pontos compartilhados no cabeçalho e no botão flutuante.

1. Expor no cabeçalho móvel um controle **Menu** com nome acessível, estado expandido e acesso a Como funciona, Casos, Agente pessoal e Quem faz. Preservar o CTA de contato. Fechar o menu ao selecionar um destino ou pressionar `Esc` e devolver o foco ao acionador no fechamento por `Esc`. Usar links reais para manter acesso direto e navegação a partir das páginas internas.
2. Adicionar **Pular para o conteúdo** como primeiro controle focável da home. Visível quando recebe foco, deve mover o foco para o `main`. Conferir destinos de âncora e posição com o cabeçalho sticky, inclusive ao abrir diretamente `/#casos`, `/#como-funciona`, `/#quem-faz` e `/#contato`.
3. Mostrar os controles anterior e próximo da faixa de casos também no celular, próximos da faixa, com nomes acessíveis e área de toque de pelo menos 44 × 44 px. Preservar gesto lateral, rolagem por teclado e ausência de avanço automático dos cartões. Sincronizar o estado das setas com a posição real da faixa após toque, teclado ou mudança de largura.
4. Na home móvel, retirar o botão flutuante e usar a ação compacta do cabeçalho sticky para manter o contato acessível durante a leitura. Em desktop, manter o atalho fixo e revisar a convivência com a abertura, o fechamento e o aviso de cookies. Preservar o comportamento das páginas internas e o tratamento de `prefers-reduced-motion`.

**Arquivos de partida** `src/components/home/SiteHeader.tsx`, `CasosSection.tsx`, `src/components/diagnostico/BotaoDiagnostico.tsx`, `src/pages/Index.tsx`, `src/styles/base.css`.

**Aceite** Em 360 e 390 px, chegar ao Axion e ao último cartão por toque, pelas setas e por teclado. Validar foco, `Esc`, destinos diretos e navegação a partir de uma rota interna. Fazer capturas da abertura, dos casos e do método. Nenhum controle fixo encobre textos ou ações nos estados capturados. Em 1366 px, revisar o cabeçalho, as setas e o contato fixo com e sem aviso de cookies.

## T3 · Formulário escrito e contrato de recebimento

**Prioridade alta.** Requer alteração coordenada de interface e Edge Function. O formulário é compartilhado com as páginas internas.

### Interface e persistência

1. Pedir nome, relato da rotina e um canal de retorno escolhido pela pessoa. Oferecer e-mail ou WhatsApp e exigir apenas o campo do canal selecionado. Rótulos e erros ficam junto aos campos, com autocomplete quando cabível. Aceitar relato em texto livre. Empresa e assunto saem das perguntas obrigatórias da interface.
2. No novo payload, enviar nome, mensagem, canal e apenas o contato escolhido. Reaproveitar `contact_leads` e `source: contact_form`, persistindo o campo de contato escolhido e deixando o outro nulo. O esquema versionado permite `phone`, `sector` e `message` nulos, e a migração do botão de ligação torna `email` anulável. Conferir o esquema efetivamente aplicado no ambiente de teste e os consumidores de `contact_leads`, especialmente o fluxo de aviso e a leitura de assunto e contato.
3. Em `contact-request`, usar o campo explícito de canal para distinguir o novo contrato do payload legado. Validar no servidor os dados do novo contrato e manter compatibilidade com clientes antigos que enviam os quatro campos hoje obrigatórios. Validar tipo, espaços, tamanho e formato do contato. Preservar os limites de armazenamento e as políticas de acesso. Quando chegar a hora de publicar, disponibilizar a função compatível antes da nova interface.
4. Enquanto envia, evitar reenvio pelo mesmo formulário. Em sucesso confirmado, limpar e fechar com feedback. Em falha de rede ou resposta inválida, preservar os campos e mostrar como tentar de novo ou usar o WhatsApp. Manter o pedido de ligação no fluxo próprio, com nome e telefone. Revisar a descrição pública dos campos coletados e a nota de privacidade para refletir o formulário entregue.

**Arquivos de partida** `src/components/ContactModal.tsx`, `src/components/CallModal.tsx`, `src/components/formulario/Campo.tsx`, `supabase/functions/contact-request/index.ts`, `supabase/migrations/20260809_call_button.sql`, `src/pages/PoliticaPrivacidade.tsx`. Conferir também a versão estática correspondente quando fizer parte do deploy.

**Aceite** Em ambiente de teste com destinatários controlados, enviar uma solicitação por e-mail e outra por WhatsApp separadamente. Cada envio cria um registro com mensagem e exatamente um contato, e o fluxo que recebe o lead mostra como responder. Verificar ausência de gravação para relato vazio, contato inválido e canal desconhecido. Enviar um payload legado válido e verificar o pedido de ligação. Simular falha para confirmar que o relato permanece. Exercitar a abertura e o retorno de foco na home e nas três páginas de produto. Usar dados fictícios e o backend local, homologação ou mocks em todo o teste.

## T4 · Prova, método, FAQ e metadados

1. **Casos.** Encurtar a introdução e manter o Agente pessoal em primeiro lugar. Dar destaque no cartão do Axion a **50 revendedores em um piloto de seis meses**. Descrever o piloto de pedidos por WhatsApp e o sistema próprio posterior com painel em frases separadas. Manter os rótulos que distinguem serviço, piloto, operação em uso e demonstração. Se houver captura real aprovada, inserir no Axion com legenda que identifique a versão correta, descrição acessível e dimensões reservadas. Enquanto o ativo não chegar, usar o roteiro atual.
2. **Problemas e rotinas.** Manter as três dores e os exemplos atuais. Adicionar links com texto descritivo de cada dor para `#areas`, `#como-funciona` e `#seguranca`, respectivamente. Manter a chamada para contato após a lista de rotinas.
3. **Método e segurança.** Manter quatro fases, entregas e composição horizontal/vertical. Alterar a introdução para “Ao fim de cada fase, você recebe uma entrega e decide se quer seguir.” Manter os controles de acesso, registros e aprovação humana como parte do argumento comercial.
4. **FAQ.** Antes do fechamento, publicar três perguntas e respostas visíveis e acessíveis, usando `<details>` e `<summary>` no padrão da página de Agente pessoal. Usar como base o conteúdo da home. Perguntas: “Preciso ter uma equipe de TI?”, “Funciona com o sistema que já usamos?” e “Como são definidos os custos?”. Sobre custos, explicar separadamente a definição do escopo de trabalho e o custo das ferramentas pagas ao fornecedor. Evitar prometer preço, prazo, gratuidade ou uma integração específica sem base aprovada.
5. **Fundador.** Preservar “Quem responde a sua mensagem é quem vai projetar e construir o agente.” Preencher `RETRATO_URL` quando houver retrato aprovado, com corte quadrado e espaço reservado de 96 × 96 px. As iniciais atuais servem enquanto o ativo estiver pendente. Incluir o link de trajetória somente se houver URL aprovada.
6. **Compartilhamento.** Manter o título “brhorn — Agentes de IA para empresas” e alinhar a descrição, `og:image:alt` e qualquer arte social que ainda diga “Escala” com a fase “Rotina”. Verificar a imagem servida, seu texto visível e suas dimensões reais. Manter os metadados e a imagem sincronizados entre a fonte e o HTML gerado. Como as rotas compartilham o HTML de entrada, qualquer canonical novo requer verificação por rota para evitar apontar as páginas de produto para `/`.

**Arquivos de partida** `src/content/portfolio.ts`, `src/pages/AxionPage.tsx` como referência, `src/components/home/{CasosSection,ProblemasSection,FasesSection,FechoPessoal}.tsx`, `src/components/home/Titulos.tsx`, `src/content/consultoriaAgentes.ts`, `src/lib/contato.ts`, `src/pages/Index.tsx`, `index.html`, `public/og-imagem.png`, `scripts/og/`.

**Aceite** Validar conteúdo e destinos na home renderizada, na ordem abertura, casos, problemas, rotinas, fases, segurança, FAQ e fechamento. Cada FAQ abre com teclado e expõe a resposta. Verificar que o cartão do Axion e a sua página contam a mesma sequência. Confirmar texto e imagem de compartilhamento no HTML do build. Quando houver ativos aprovados, testar carregamento e acessibilidade no celular. A publicação de novo material pode seguir em um diff separado.

## T5 · Medição e revisão integrada

Depende de T1 e T3 para refletir a jornada entregue. Combinar a validação visual final com T2 e T4.

- Documentar três resultados distintos: clique no WhatsApp, formulário recebido e conversa com uma rotina identificada. Usar as origens já conhecidas pelo site, por exemplo cabeçalho, abertura, fechamento e atalho fixo quando existir. Reaproveitar `Contact` para clique com consentimento e `Lead` após confirmação de recebimento, identificando a origem e o tipo por dados não pessoais. No modo chat, o evento de abertura deve ser distinguível do clique de WhatsApp. Preservar a contagem de visitas existente.
- Marcar conversa qualificada no acompanhamento comercial já utilizado, quando houver relato de uma rotina concreta. Se o acompanhamento ainda não estiver definido, registrar a definição e deixar essa medição manual até existir um destino de dados acordado. Um clique ou uma abertura de modal não comprova mensagem enviada ou conversa qualificada.
- Confirmar que cada interação dispara no máximo um evento correspondente, que falhas de envio não geram `Lead` e que Meta Pixel permanece inativo antes do aceite e depois da recusa. Exercitar com bloqueio de chamadas externas ou stub local e verificar que relato, telefone e e-mail ficam fora dos eventos.

**Arquivos de partida** `src/hooks/use-contact-intent.ts`, `src/components/diagnostico/BotaoDiagnostico.tsx`, `src/components/home/SiteHeader.tsx`, `src/components/{ContactModal,CallModal}.tsx`, `src/lib/consentimento.ts`.

### Registro da medição

| Resultado | Como contar |
| --- | --- |
| Clique no WhatsApp | `Contact` com `origem` do botão e `tipo: whatsapp`. |
| Abertura do chat | `ChatOpened` com `origem` do botão ou `link_direto` e `tipo: chat`. |
| Contato recebido | `Lead` após confirmação do formulário ou da ligação. O diagnóstico concluído com resumo também registra `Lead`, com `tipo: chat`. |
| Conversa qualificada | No QG, marcar o lead como **Qualificado** quando o cliente descrever uma rotina concreta. Registrar a rotina na interação comercial. A revisão é manual. |

Os eventos do Meta Pixel respeitam a escolha atual do aviso de cookies. Os parâmetros do contato contêm apenas a origem e o tipo. A publicação da função de contato no Supabase e o teste de recebimento real seguem pendentes.

## Verificação final

1. A partir da raiz de `brhorn-ai-boost`, executar `npx tsc -b` e `npm run build`. Esperado: ambos com código zero e `dist/index.html` com a home pré-renderizada, o H1, FAQ e metadados atualizados.
2. Servir o build com `npm run preview -- --host 127.0.0.1 --port 4174 --strictPort`. Rodar `BASE=http://127.0.0.1:4174 node scripts/verificar-larguras.mjs`. O script hoje procura o rótulo literal “Fazer diagnóstico” em posição fixa. Atualizar o teste junto com T1/T2 para verificar o controle de contato apropriado à rota, largura e estado do aviso. Esperado: sem rolagem horizontal e contato acessível em todas as quatro rotas do script. Completar manualmente em 768 e 1024 px.
3. Validar o aviso de cookies na primeira visita e após recusa, teclado, foco, links diretos, texto em telas pequenas e modo de movimento reduzido. Fazer as verificações de formulários e eventos da T3/T5 em ambiente de teste. Conferir `/axion`, `/viaserra`, `/configuracao-de-agentes`, as rotas legais e a 404 nas partes compartilhadas.
4. Se o sandbox bloquear a porta do preview ou do pré-render, executar em sessão local autorizada. `npm run build:dev` permite conferir a compilação Vite, mas o aceite de pré-render ainda depende de `npm run build`.

## Pendências de insumos

- Rodrigo indica, quando disponível, qual retrato quadrado pode ir ao ar e qual captura do Axion pode ser publicada. A sequência textual e os controles podem ser implementados antes desses materiais.
- Presume-se que a primeira conversa serve para entender a rotina e indicar um próximo passo, conforme o fechamento atual. O texto evita caracterizar a fase de diagnóstico como gratuita. Se a primeira conversa já inclui formalmente o mapa de oportunidades, revisar a distinção da T1 antes da publicação.
