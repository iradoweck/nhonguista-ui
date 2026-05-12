# Arquitetura Técnica: Nhonguista

Este documento detalha as decisões arquiteturais e a organização técnica do ecossistema.

---

## 💎 Visão Geral
O **Nhonguista** utiliza uma abordagem **Mobile-First** e **WhatsApp-First**, garantindo que a plataforma seja acessível e funcional no contexto moçambicano, onde a conectividade e o uso de dados móveis são fatores críticos.

## 📦 Monorepo (Turborepo + pnpm)
Utilizamos **pnpm workspaces** para gerenciar a complexidade do projeto:
- **Compartilhamento de Código:** Tipos, utilitários e componentes de UI são pacotes internos reutilizados por todos os apps.
- **Orquestração:** O Turborepo garante que builds e testes sejam realizados apenas no que foi alterado (cache inteligente).

## 🚀 Backend (Laravel 12 API)
A API é o "Single Source of Truth" para todos os clientes (Web, Admin, Mobile).
- **Banco de Dados:** MySQL com UUIDs em todas as tabelas para facilitar a migração e segurança.
- **Ambiente Dinâmico:** Arquitetura agnóstica a domínio, detectando automaticamente a fonte de execução (ideal para ambientes cPanel e VPS).
- **Padronização:** Service Pattern para lógica de negócio complexa isolada dos controladores para testabilidade.
- **Sanctum:** Autenticação robusta para SPA e dispositivos móveis.

## 🎨 Frontend & UI
- **Next.js 15:** Para performance (SSR/SSG) e SEO na Landing Page.
- **TailwindCSS v3:** Estilização rápida e consistente.
- **Shadcn/UI:** Componentes acessíveis e modernos seguindo o Design System próprio.

## 🗺️ Localização e Moeda
- **Timezone:** `Africa/Maputo`
- **Moeda:** Metical Moçambicano (`MZN`)
- **Idioma:** Português (Moçambique)

---

## 🛡️ Camada de Segurança
1.  **Proteção de Dados:** `.gitignore` configurado para bloquear `.agent/`, `.env` e chaves privadas.
2.  **Validação:** Todas as entradas de dados são validadas rigorosamente tanto no Frontend quanto no Backend.
3.  **Auditoria:** Soft deletes e logs de sistema para rastreabilidade de ações críticas.

---

## 📐 Estrutura de Pastas (Visual)

```yaml
nhonguista/
  apps/         # Aplicações de interface
  backend/      # Núcleo Laravel
  packages/     # Bibliotecas compartilhadas (@nhonguista/*)
  docs/         # Documentação de referência
  infrastructure/ # Configurações de servidor e CI/CD
```
