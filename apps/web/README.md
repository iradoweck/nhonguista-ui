# Nhonguista Web — Portal do Utilizador

A aplicação principal do ecossistema **Nhonguista**, desenvolvida para conectar clientes e profissionais de forma rápida e intuitiva.

---

## 🚀 Tecnologias
- **Framework:** Next.js 15 (App Router)
- **Styling:** TailwindCSS v3
- **Componentes:** @nhonguista/ui (Shadcn/UI based)
- **Estado:** Zustand
- **Data Fetching:** TanStack Query (React Query)

---

## 🏗️ Estrutura
- **`src/app`**: Rotas e páginas da aplicação.
- **`src/components`**: Componentes locais (componentes globais vêm de `@nhonguista/ui`).
- **`src/hooks`**: Lógica de interface reutilizável.
- **`src/services`**: Integração com a API via `@nhonguista/sdk`.

---

## 🛠️ Início Rápido
Este app faz parte de um Monorepo. Para rodar:

```bash
# Na raiz do monorepo
pnpm dev --filter web
```

---

## 📱 Mobile First
Desenvolvido com foco total na experiência mobile, otimizando o uso de dados e priorizando o contato via WhatsApp.

---
© 2026 Nhonguista. Todos os direitos reservados.
