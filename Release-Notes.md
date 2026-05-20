# 📓 Notas de Lançamento - Nhonguista

## [1.0.2-alpha] — 20 de Maio de 2026
> **Foco:** Reestruturação de Repositório (Git Submodules) e Automação de CI/CD.

### 🏗️ Arquitetura Open Source vs Closed Source
- **Isolamento de Código**: Extração bem-sucedida do pacote `@nhonguista/ui` (`packages/ui`) para um repositório público independente no GitHub sob a organização `zedecks`.
- **Destaque Pessoal (Fork)**: Criação de um fork pessoal em `iradoweck/nhonguista-ui` sincronizado para que o desenvolvedor possa destacar a biblioteca no seu perfil.
- **Integração de Workspace**: O pacote UI foi integrado de volta ao repositório privado `zedecks/nhonguista` como um **Git Submodule** apontando e rastreando ativamente a branch `devlab`.

### ⚙️ Automatizações & Sincronização
- **Auto-Sync Parent Workflow**: GitHub Action no repositório privado para atualizar automaticamente o ponteiro do submódulo na branch `devlab` ao receber atualizações.
- **Notify Monorepo Workflow**: GitHub Action no repositório público da UI para disparar um sinal sempre que novos commits forem enviados para a branch `devlab`.
- **DX local**: Configuração de workspace recomendada para o VS Code atualizar submódulos automaticamente no comando `git pull`.

---

## [1.0.1-alpha] — 13 de Maio de 2026
> **Foco:** UX Dinâmica, Estatísticas Reais e Refinamento Gramatical.

### 🚀 Experiência "Viva" (UX/UI)
- **Hero Interativo**: Implementação de efeito *typewriter* no título com concordância gramatical automática (Gênero/Número) e barra de pesquisa com *placeholder* animado.
- **Live Search Preview**: Sistema de resultados em tempo real (dropdown) integrado na barra de pesquisa da Landing Page.
- **Impacto Social (Stats)**: Nova secção de métricas reais consumindo dados vivos do banco de dados (Nhonguers, Nhonguistas Pro, Serviços e Tempo no Ar).
- **FAQ Pro**: Acordeão inteligente em duas colunas com lógica de colapso automático para manter o layout compacto.
- **Destaques Inteligentes**: Expansão da montra de serviços para 2 linhas, priorizando a diversidade de categorias.

### 🔧 Ajustes & Estabilização
- **L10n**: Localização completa de datas e meses para Português (PT-MZ).
- **Backend Cleanup**: Remoção da tabela `system_settings` em favor de marketing-copy no código para máxima performance.
- **Bug Fix**: Correção de dízimas infinitas no cálculo de tempo e erro de sintaxe no modelo `ProviderProfile`.

---

## [1.0.0-alpha] — 13 de Maio de 2026
> **Foco:** Consolidação da Fundação Backend e Marketplace Dinâmico.

### ✨ Novas Funcionalidades (MVP)
- **Sistema Multi-Perfil**: Gestão unificada onde um utilizador pode alternar entre contratar serviços (Cliente) e oferecer competências (Nhonguista).
- **Lead Tracking (WhatsApp-First)**: Monitorização de conversão em tempo real. Cada clique para o WhatsApp é registado como um lead qualificado na base de dados.
- **Marketplace Inteligente**: Pesquisa textual e filtragem por categorias de serviços específicas de Nampula.
- **Fluxo de Autenticação**: Registo e Login optimizados para números de telefone locais com persistência de sessão segura.

### 🏗️ Infraestrutura & Backend
- **Core API (Laravel 12)**: Motor central robusto com suporte a UUIDs em todas as tabelas para máxima segurança e portabilidade.
- **Arquitetura de Dados**: Implementação de modelos relacionais complexos para Serviços, Categorias, Avaliações e Localizações.
- **CORS & Segurança**: Configuração multi-origem preparada para alimentar simultaneamente o Marketplace, o Painel Admin e futuras Apps Mobile.

### 🎨 Experiência do Utilizador (UX/UI)
- **Interface Premium**: Design moderno, mobile-first, com carregamento optimizado e estados de "skeleton loading".
- **Identidade Visual**: Implementação do sistema de cores de alto contraste optimizado para legibilidade em Nampula.
- **Localização**: Dados reais de bairros (Mutauanha, Muhala, Namutequeliua) integrados via seeders.

---

### 🔧 Ajustes Técnicos
- Migração para **Turborepo 2.0+** com gestão de tarefas paralela.
- Setup de ambiente agnóstico com **SQLite** para desenvolvimento local rápido.
- Remoção de código legado e boilderplates não utilizados.

---
*Desenvolvido com ❤️ pelos Irmãos Muacigarro & ZEDECK'S IT.*
