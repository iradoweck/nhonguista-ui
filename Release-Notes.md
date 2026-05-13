# Release Notes - Nhonguista

## v0.1.0 - MVP Foundation & Core Features (Alpha)
**Data:** 13 de Maio de 2026

O primeiro grande ciclo de desenvolvimento (Fases 1 a 3) estabeleceu a infraestrutura do ecossistema Nhonguista, focada em performance, escalabilidade e na experiência de conversão direta (WhatsApp-First) no mercado de Nampula.

### 🏗️ Arquitetura & Infraestrutura (Fase 1)
- **Monorepo com Turborepo:** Estruturação do projeto usando pnpm workspaces para gerenciar pacotes, apps frontend e o backend Laravel em um único repositório.
- **Backend Laravel 12 API:** Inicialização da API central responsável pela regra de negócios (Agnóstico, preparado para cPanel/VPS).
- **Frontend Ecosystem (Next.js 15):** 
  - Criação do aplicativo `apps/landing` (Landing Page voltada à conversão e captura de leads).
  - Criação do aplicativo `apps/admin` (Painel Administrativo para controle de acessos, profissionais e auditoria).
- **Design System (`@nhonguista/ui`):** Implementação de um pacote compartilhado de UI focado no padrão Shadcn/Radix, garantindo consistência visual entre web, admin e mobile no futuro.

### 🚀 Core MVP & Identidade (Fase 2)
- **Autenticação Segura:** Integração com **Laravel Sanctum** para autenticação unificada via Tokens de API, cobrindo acessos Mobile e Web.
- **Modelagem de Dados Inicial:**
  - Criação das tabelas fundamentais: `users`, `categories` (Serviços/Produtos), `locations` (Bairros de Nampula), `provider_profiles`, `service_requests`, `reviews` e `companies`.
  - Inserção de dados estáticos (`Seeders`) para Bairros de Nampula (Ex: Muhala, Napipine, Namutequeliua) e um Usuário Admin Base.
- **Landing Page Mobile-First:**
  - Reformulação completa da página principal para dispositivos móveis com esquema de cores otimizado para alto contraste.
  - Inclusão do sistema **WhatsApp-First**: Botões de ação diretos que ligam usuários aos serviços sem atrito.
  - Integração de UI Premium (`@nhonguista/ui`).

### 🛡️ Validação & Expansão de Confiança (Fase 3)
- **Otimização para Motores de Busca (SEO):**
  - Implementação de metadados focados (`layout.tsx`) com palavras-chave estratégicas ("Serviços em Nampula").
  - Configuração de Open Graph / Twitter Cards para pré-visualizações ricas ao compartilhar links do Nhonguista nas redes sociais.
- **Sistema de Verificação de Identidade (BI):**
  - Implementada a arquitetura (Backend) de `Verifications` permitindo que profissionais submetam seus documentos (Bilhete de Identidade / NUIT).
  - Atualização do modelo `User` para monitorar flags de segurança automáticas: `is_verified` e `verification_status` (pending, approved, rejected).
- **Notificações Internas:**
  - Implementação da classe `VerificationStatusUpdated` no Laravel para salvar notificações diretamente no banco de dados, preparando o ecossistema para alertas no App/Web.
- **Dashboard Administrativo Inicial:**
  - Construído um layout escalável em `apps/admin/src/app/page.tsx` com navegação lateral (Sidebar) dedicada à moderação de serviços, profissionais e verificações.
  - Incluídos widgets estáticos de métricas financeiras/operacionais e tabelas de verificações recentes.

### 🔧 Outras Alterações Técnicas Notáveis
- Transição da configuração `pipeline` para `tasks` no `turbo.json` atendendo às normas do Turborepo 2.0+.
- Configuração `.env` agnóstica para usar **SQLite** no ambiente local por padrão, simplificando o processo de testes e o setup inicial de novos desenvolvedores sem dependência de Docker.
- **Limpeza do Monorepo:** Remoção do pacote boilerplate padrão (`apps/web`) para evitar conflitos de portas, estabelecendo o roteamento correto onde a Landing Page assume a porta `:3000` e o Admin Dashboard a porta `:3001` no ambiente de desenvolvimento local.

---

*Estas notas refletem o progresso em direção ao lançamento do beta restrito e os preparativos para o desenvolvimento e acoplamento dos clientes Mobile na próxima fase.*
