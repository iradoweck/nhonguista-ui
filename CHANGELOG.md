# Changelog - Nhonguista UI Package

## [0.0.4] - 14-08-2026
> **Foco:** Atualização Visual, Padronização e Alinhamento Estrutural.

### ✨ Adicionado
- **Design System**: Nova variante `white` no componente `Button`, ideal para sobreposição em secções de alto contraste e fundos coloridos.
- **Novos Componentes (Core)**: Criação dos componentes `<Container />`, `<Avatar />`, e `<Badge />`.
- **Dependências UI**: Adição do pacote `@radix-ui/react-select` como alicerce para o futuro componente de `<Select />`.

### 🔄 Alterado
- **Estilização**: Curvatura dos componentes `Button` e `Input` ajustada de `rounded-full` (pílula) para `rounded-2xl` visando um visual mais elegante e moderno, enquanto Avatares mantêm-se estritamente `rounded-full`.

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
