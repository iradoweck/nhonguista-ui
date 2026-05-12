# Nhonguista API — Core Backend

Este é o núcleo do ecossistema Nhonguista, desenvolvido em **Laravel 12**. Responsável por toda a lógica de negócio, persistência de dados e integrações.

---

## 🚀 Tecnologias
- **Framework:** Laravel 12
- **PHP:** 8.3+
- **Autenticação:** Laravel Sanctum (Cookies & Tokens)
- **Banco de Dados:** MySQL 8 (UUID as primary key)
- **Cache & Queue:** Redis

---

## 🛠️ Configuração Local

### Pré-requisitos
- PHP 8.3 instalado localmente.
- Composer 2.x.
- MySQL rodando.

### Instalação
```bash
# 1. Instalar dependências
composer install

# 2. Configurar variáveis de ambiente
cp .env.example .env

# 3. Gerar chave da aplicação
php artisan key:generate

# 4. Rodar Migrations (Certifique-se que o banco MySQL está criado)
php artisan migrate
```

---

## 📐 Padrões de Desenvolvimento
- **UUID:** Todas as tabelas usam identificadores universais.
- **Service Pattern:** Lógica complexa deve residir em `app/Services`.
- **Resources:** Respostas da API são formatadas via `Eloquent Resources`.
- **Soft Deletes:** Implementado em entidades críticas para segurança de dados.

---

## 🛡️ Segurança
- Proteção contra SQL Injection e XSS nativa.
- Rate limiting configurado para API.
- CORS configurado para os domínios oficiais.

---
© 2026 Nhonguista. Todos os direitos reservados.
