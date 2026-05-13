# 🌟 Nhonguista — A arte de vender e prestar serviços

<p align="center">
  <img src="https://img.shields.io/badge/Status-Fase%_3_Valida%C3%A7%C3%A3o-orange?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Regi%C3%A3o-Nampula%2C%20Mo%C3%A7ambique-black?style=for-the-badge" alt="Região">
  <img src="https://img.shields.io/badge/Vers%C3%A3o-v0.1.0-blue?style=for-the-badge" alt="Versão">
  <a href="LICENSE"><img src="https://img.shields.io/badge/Licen%C3%A7a-Open%20Core%20(Dual)-green?style=for-the-badge" alt="Licença"></a>
</p>

---

O **Nhonguista** é um ecossistema digital projetado para transformar o mercado de serviços em Moçambique. Focado inicialmente na província de **Nampula**, a plataforma conecta profissionais talentosos a clientes que buscam confiança, qualidade e agilidade através de um fluxo focado na conversão pelo WhatsApp.

> *"Valorizando a reputação e impulsionando o crescimento profissional local."*

---

## 🏗️ Arquitetura do Ecossistema (Open Core)

Utilizamos a arquitetura de **Monorepo** (via Turborepo) para garantir consistência visual e velocidade de desenvolvimento em todo o ecossistema. O ambiente é preparado para receber contribuições na branch `devlab`.

```text
nhonguista/
├── apps/
│   ├── landing/          # Portal institucional (Next.js - Público)
│   └── admin/            # Painel Administrativo (Next.js - Privado)
├── backend/
│   └── laravel-api/      # Regras de negócio (Laravel 12 - Privado)
├── packages/
│   └── ui/               # Design System (Tailwind + Shadcn - Público)
└── docs/                 # Base de conhecimento e Guias
```

---

## 🛠️ Stack Tecnológico Premium & LTS

Desenhado para suportar deploys robustos em ambientes Linux tradicionais (**cPanel / VPS**) ou modernas clouds, utilizando versões LTS estáveis para segurança corporativa.

| Camada | Tecnologia Principal | Foco |
| :--- | :--- | :--- |
| **Frontend** | **Next.js 15**, React, TypeScript, TailwindCSS v3 | SEO Máximo, Acessibilidade, Mobile-First. |
| **Backend** | **Laravel 12** (PHP 8.3), Sanctum Auth, MySQL/SQLite | APIs REST, Segurança, Filas e Notificações. |
| **Design System** | **Shadcn/Radix**, Lucide Icons | UI Consistente e Escalável. |
| **Infra/Tools** | **Turborepo** (pnpm), Git Flow | Velocidade de Build, Organização Modular. |

---

## 🚀 Como Iniciar (Ambiente de Desenvolvimento)

Para colaborar ou testar o projeto localmente, confira nosso [Guia de Contribuição (CONTRIBUTING.md)](CONTRIBUTING.md).

### Pré-requisitos
- **Node.js** >= 18
- **pnpm** >= 10
- **PHP** >= 8.3
- **Composer** >= 2.x

### Quick Start
```bash
# 1. Instalar pacotes de todo o Monorepo
pnpm install

# 2. Configurar a API Laravel
cd backend/laravel-api
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate:fresh --seed
cd ../../

# 3. Iniciar as plataformas
pnpm dev
```
- **Landing Page:** [http://localhost:3000](http://localhost:3000)
- **Admin Dashboard:** [http://localhost:3001](http://localhost:3001)

---

## 🤝 Quer Contribuir?

A comunidade é bem-vinda para ajudar a evoluir a **UI** e a **Landing Page**. 
Leia nosso [CONTRIBUTING.md](CONTRIBUTING.md) para entender como as PRs funcionam na branch `devlab`, as regras de *Tags*, e nossos Padrões de Commit em Português.

Por favor, garanta que suas interações seguem nosso [Código de Conduta (CODE_OF_CONDUCT.md)](CODE_OF_CONDUCT.md).

- [Reportar um Bug](../../issues/new?template=bug_report.md)
- [Sugerir Melhoria](../../issues/new?template=feature_request.md)

### 🔒 Política de Segurança
Pesquisadores de segurança: Se encontrarem vulnerabilidades no nosso Backend ou Painel Administrativo, **NÃO** abram Issues públicas. Confiram nosso arquivo [SECURITY.md](SECURITY.md) para instruções de reporte confidencial.

---

## 👥 Equipa, Suporte e Créditos

Este projeto é visionado e mantido ativamente com dedicação aos talentos de Nampula.

- **Irmãos Muacigarro** (Edmilson & Leoltino) — Fundadores e Liderança Técnica
- **ZEDECK'S IT** — Desenvolvimento Estrutural, Suporte Tecnológico e Integração

<p align="center">
  <br>
  Desenvolvido com 🩵 pelos <b>Irmãos Muacigarro & ZEDECK'S IT</b>
</p>
