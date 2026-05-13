# 📓 Notas de Lançamento - Nhonguista

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
