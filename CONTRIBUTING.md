# Guia de Contribuição - Nhonguista

Muito obrigado por se interessar em contribuir com o **Nhonguista**! Este projeto visa transformar o mercado de prestação de serviços em Nampula, Moçambique, e a sua ajuda é fundamental.

## Arquitetura Open Core

O nosso projeto utiliza um **Monorepo** gerenciado pelo Turborepo.
- **Frontend & UI**: A Landing Page (`apps/landing`) e o Design System (`packages/ui`) são abertos para contribuições visuais e de SEO.
- **Backend & Admin**: (`backend/laravel-api` e `apps/admin`) compõem o nosso "Core". Alterações aqui exigem revisão cuidadosa para garantir a segurança dos dados e compatibilidade com o cPanel/VPS.

## Fluxo de Trabalho (Git Workflow)

Para mantermos a estabilidade da produção (`main`), todo o desenvolvimento e contribuições da comunidade devem acontecer na branch **`devlab`**.

1. Faça o **Fork** do repositório.
2. Clone o seu fork localmente e mude para a branch `devlab`:
   ```bash
   git clone https://github.com/SEU-USUARIO/nhonguista.git
   cd nhonguista
   git checkout devlab
   ```
3. Crie uma nova branch a partir da `devlab` para a sua funcionalidade:
   ```bash
   git checkout -b feat/minha-nova-funcionalidade
   ```
4. Faça o commit das suas alterações seguindo o padrão abaixo.
5. Envie para o seu fork: `git push origin feat/minha-nova-funcionalidade`.
6. Abra um **Pull Request** apontando para a branch `devlab` do repositório original.

## Padrões de Commit

Usamos mensagens de commit em **Português** seguindo a semântica de Conventional Commits:

- `feat:` Nova funcionalidade (ex: `feat(api): adiciona rota de filtro por bairro`)
- `fix:` Correção de bug (ex: `fix(ui): corrige margem do botão de whatsapp`)
- `docs:` Alterações na documentação (ex: `docs: atualiza README`)
- `chore:` Tarefas de manutenção e configuração (ex: `chore: atualiza dependências`)
- `refactor:` Refatoração de código sem alterar comportamento

## Como Testar Localmente (Ambiente Dev)

Para subir todo o ecossistema na sua máquina (usando SQLite no backend por padrão para facilitar):

```bash
# 1. Instalar dependências gerais (pnpm workspaces)
pnpm install

# 2. Configurar o backend
cd backend/laravel-api
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate:fresh --seed
cd ../../

# 3. Rodar as aplicações (Landing, Admin, API)
pnpm dev
```
As aplicações estarão disponíveis nas respectivas portas (ex: Landing no `3000`, Admin no `3001` e API no `8000`).

## Versionamento e Tags (Releases)

Nosso sistema de versionamento segue o [SemVer](https://semver.org/).
- A branch `main` sempre reflete o código em produção.
- Sempre que a branch `devlab` atinge estabilidade, os **Maintainers** (Irmãos Muacigarro & ZEDECK'S IT) mesclam na `main` e emitem uma Tag Oficial.

**Criando uma Tag (Apenas para Maintainers):**
```bash
# Marcar o código na branch main
git tag -a v0.1.0 -m "Release v0.1.0 - MVP Foundation"
git push origin v0.1.0
```

Seja muito bem-vindo à comunidade Nhonguista! 🚀
