# Atualização isolada do Hero da página inicial

## Escopo
Alterar somente o Hero em `src/routes/index.tsx`. O cabeçalho, todas as seções abaixo do Hero, rodapé, links, URLs, configurações e integrações existentes permanecerão intactos.

## Implementação
- Reconstruir a composição do Hero com fundo azul-marinho quase preto, gradiente azul profundo, grade sutil e glow radial concentrado atrás do profissional.
- Manter a foto existente do Renato sem edição ou regeneração:
  - desktop: coluna direita, enquadramento da cintura para cima, sem sobrepor o conteúdo;
  - mobile: centralizada no topo, acima de título, descrição e CTAs;
  - aplicar apenas integração visual por glow e fade na base, sem deformar nem alterar a pessoa.
- Reorganizar o conteúdo na ordem solicitada:
  1. título em quatro linhas fixas, usando a fonte de impacto já carregada, com `VENDAS.` em azul vibrante;
  2. descrição;
  3. bloco premium de consultoria clicável;
  4. botão verde do WhatsApp;
  5. faixa das cinco plataformas.
- Transformar o bloco de consultoria em link para o Calendly existente, em nova aba, com ícone de calendário/check e os dois níveis de texto solicitados.
- Preservar no WhatsApp a URL e a mensagem pré-preenchida atuais.
- Adicionar os disparos de rastreamento somente aos CTAs do Hero:
  - `clique_agendar` / `hero-consultoria`;
  - `clique_whatsapp` / `hero-whatsapp`.
- Criar o gráfico discreto de crescimento com linha, pontos, seta e barras como elemento decorativo no lado da foto, sem interceptar cliques ou cobrir textos.
- Refazer a faixa inferior para exibir Google Ads, Meta Ads, YouTube Ads, GA4 e GTM com identidade visual colorida e grid responsivo sem rolagem horizontal.

## Detalhes técnicos
- Usar classes responsivas locais no próprio Hero para não afetar outras áreas.
- Declarar um helper tipado e seguro para `window.dataLayer` no arquivo da página, acionado por `onClick` sem alterar a navegação dos links.
- Manter o asset atual `especialista-agr.png.asset.json` exatamente como está.
- Garantir dimensões estáveis, `overflow` controlado e linhas do título com `whitespace-nowrap`, ajustando tamanhos por breakpoint sem escala contínua por viewport.

## Verificação
- Validar visualmente em 1280px (desktop), 768px (tablet), 390px e 360px (celular).
- Confirmar: ausência de rolagem horizontal; título completo em quatro linhas; `VENDAS.` azul; foto nunca em corpo inteiro; foto acima do texto no mobile; nenhuma sobreposição; ambos os CTAs visíveis e funcionais; cinco plataformas sem corte.
- Confirmar no navegador que os cliques adicionam os eventos corretos ao `dataLayer` e continuam abrindo os destinos existentes.
- Não publicar.
