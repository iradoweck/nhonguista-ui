# Changelog - Nhonguista UI Package

## [0.0.4] - 14-08-2026
> **Foco:** Atualização Visual, Padronização, Alinhamento Estrutural e Expansão da Biblioteca de Primitivas.

### ✨ Adicionado
- **Design System**: Nova variante `white` no componente `Button`, ideal para sobreposição em secções de alto contraste e fundos coloridos.
- **Novos Componentes (Core)**: Criação dos componentes `<Container />`, `<Avatar />`, e `<Badge />`.
- **Novos Componentes (Avançados)**: Criação de `<Skeleton />`, `<EmptyState />`, `<Rating />` e `<Gallery />` (com Lightbox modal integrado).
- **Componente Select**: Implementação completa do `<Select />` baseado em `@radix-ui/react-select` com estilização coerente (`rounded-2xl`, `ring-brand`).
- **Variante WhatsApp**: Nova `variant="whatsapp"` no componente `<Button />` com a cor verde oficial (#25D366) e efeitos de hover/shadow.
- **Dependências UI**: Adição dos pacotes `@radix-ui/react-select`, `@radix-ui/react-dialog`, `@radix-ui/react-toast` e `@radix-ui/react-tooltip`.
- **Tokens de Espaçamento**: Definição de variáveis CSS de espaçamento (`--spacing-xs` a `--spacing-4xl`) no design system global.
- **Acessibilidade**: Estados `focus-visible` globais com `ring-brand` aplicados a todos os elementos interactivos (botões, links, inputs, selects).
- **Novos Componentes (Interacção)**: Criação de `<Dialog />`, `<Toaster />` (com hook `useToast`), `<Tooltip />` e `<Breadcrumb />`.
  - **Dialog**: Modal acessível com overlay `backdrop-blur`, conteúdo `rounded-2xl` e fecho automático com `X`.
  - **Toast**: Sistema de notificações no canto inferior direito com auto-dismiss (5s) e variantes `success`, `error`, `warning` e `default`.
  - **Tooltip**: Balão informativo com fundo escuro, `rounded-lg` e animações de entrada/saída.
  - **Breadcrumb**: Navegação hierárquica semântica (`nav > ol`) com separador chevron e suporte `asChild`.

### 🔄 Alterado
- **Estilização**: Curvatura dos componentes `Button` e `Input` ajustada de `rounded-full` (pílula) para `rounded-2xl` visando um visual mais elegante e moderno, enquanto Avatares mantêm-se estritamente `rounded-full`.

### 🐛 Corrigido
- **Padding no Button**: Ajustado o padding do tamanho `lg` para utilizar a escala padrão do Tailwind (`px-10`), assegurando que a extração por `@source` funciona corretamente em todos os consumidores do monorepo.

### 🔧 Detalhes Técnicos
- **Rating**: Componente híbrido — modo leitura (read-only) por defeito, modo interactivo quando `onValueChange` é fornecido. Suporta meias-estrelas via `clipPath`.
- **Gallery**: Grelha responsiva com navegação por teclado (←/→), controlos Próximo/Anterior e contador de imagens.
- **EmptyState**: Aceita `icon`, `title`, `description` e `action` (CTA) para feedback visual amigável em listagens vazias.
- **Badge Integration**: Substituição das tags manuais de categoria nos cartões de `FeaturedServices` pelo componente `<Badge />` oficial.

---

## [0.0.3] - 13 Ago 2026
> **Foco:** Identidade Visual e Organização GitHub.

### ✨ Adicionado
- **Organização**: Repositório transferido para `@nhonguista`.

### 🔄 Alterado
- **Design System Base**: Atualização do `tailwind.config.js` para mapear dinamicamente as cores de marca (`primary` e `accent`) para Variáveis CSS nativas injetadas pelo portal de consumo (Tailwind v3 vs v4 compatibilidade).

---

## [0.0.2] - 12 Ago 2026
> **Foco:** Atualização de dependências, Dogmatização de IA e Workspaces.

### ✨ Adicionado
- **Comunidade & Governança**: Adição de ficheiros CONTRIBUTING.md, SECURITY.md, CODE_OF_CONDUCT.md, VERSIONING.md e templates do GitHub.
- **Integração na Arquitetura de Agentes**: Adoção do *Versioning Dogma* e injeção do `.agent/AGENTS.md`.
- **Licenciamento**: Adoção integral da licença de código aberto Apache License 2.0.
- **Framework**: Upgraded para TypeScript 7.0.2 de forma a alinhar com a stack global do monorepo.

### 🔄 Alterado
- **Integração de Workspace**: Consolidado no ecossistema raiz como dependência direta local via pnpm.
- **Documentação**: Criação e configuração do `README.md` refletindo o licenciamento sob Apache License 2.0.
- **Dependências**: Otimização de dependências de UI.

---

## [0.0.1] - 13 Mai 2026
> **Foco:** Setup Inicial, Extração do Pacote UI e Sincronização CI/CD.

### ✨ Adicionado
- **Fundação**: Fundação de UI baseada em React 18 e Tailwind CSS 3.
- **Automação**: Configuração de workflows (Notify Monorepo) para sinalizar atualizações ao repositório raiz (Nhonguista).

### 🔄 Alterado
- **Extração Bem-Sucedida**: O pacote UI foi extraído da monorepo original para um repositório público (`iradoweck/nhonguista-ui`).
