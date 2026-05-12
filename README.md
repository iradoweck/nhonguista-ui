# Nhonguista — A arte de vender e prestar

<p align="center">
  <img src="https://img.shields.io/badge/Status-Fundação-orange?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Região-Moçambique-black?style=for-the-badge" alt="Região">
  <img src="https://img.shields.io/badge/Stack-Monorepo-white?style=for-the-badge" alt="Stack">
</p>

---

O **Nhonguista** é um ecossistema digital projetado para transformar o mercado de serviços em Moçambique. Focado inicialmente em **Nampula**, a plataforma conecta profissionais talentosos a clientes que buscam confiança, qualidade e agilidade.

> "Valorizando a reputação e impulsionando o crescimento profissional local."

---

## 🏗️ Estrutura do Ecossistema

O projeto utiliza uma arquitetura de **Monorepo** moderna para garantir consistência e velocidade de desenvolvimento.

```text
nhonguista/
├── apps/
│   ├── landing/          # Portal institucional e conversão
│   ├── web/              # Aplicação principal do utilizador
│   └── admin/            # Gestão central da plataforma
├── backend/
│   └── laravel-api/      # O coração: Regras de negócio e dados
├── packages/
│   ├── ui/               # Design System (Tailwind + Shadcn)
│   ├── types/            # Tipagens globais TypeScript
│   └── sdk/              # Cliente de integração centralizado
└── docs/                 # Base de conhecimento e estratégia
```

---

## 🛠️ Tech Stack Premium

| Camada | Tecnologia |
| :--- | :--- |
| **Frontend** | Next.js 15, TypeScript, TailwindCSS v3 |
| **Backend** | Laravel 12, MySQL 8, PHP 8.3 |
| **Mobile** | Flutter (Brevemente) |
| **Infra** | Turborepo, pnpm, Docker, GitHub Actions |

---

## 🚀 Como Iniciar

### Pré-requisitos
Certifique-se de ter instalado:
- **Node.js** >= 18
- **pnpm** >= 10
- **PHP** >= 8.3
- **Composer** >= 2.x

### Instalação Rápida
```bash
# 1. Instalar dependências do Monorepo
pnpm install

# 2. Configurar o Backend
cd backend/laravel-api
composer install
cp .env.example .env
php artisan key:generate
```

### Comandos de Desenvolvimento
```bash
# Rodar todos os serviços em paralelo
pnpm dev
```

---

## 🛡️ Segurança e Governança
- **Anti-Leak:** `.gitignore` ultra-rigoroso para proteção de segredos.
- **Git Flow:** Padrões de commit convencionais em Português.
- **Open Source:** Estratégia clara de separação de módulos comunitários vs proprietários.

---

## 👥 Equipa e Suporte
- **Irmãos Muacigarro** (Edmilson & Leoltino) — Fundadores e Liderança Técnica
- **ZEDECK'S IT** — Desenvolvimento e Suporte Tecnológico

---
<p align="center">
  Desenvolvido pelos <b>Irmãos Muacigarro & ZEDECK'S IT</b>
</p>
