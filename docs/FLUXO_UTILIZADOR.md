# Fluxo de Utilizador — Nhonguista MVP

> Documento de referência arquitectural para o fluxo de utilizadores na plataforma Nhonguista.

---

## 🗺️ Fluxo Principal

```mermaid
flowchart TD
    A[Visitante chega ao site] --> B{Tem conta + Logado?}
    B -->|Sim| C[Redireciona ao Portal]
    B -->|Não| D[Landing Page]
    
    D --> E[Navega livremente]
    E --> F[Pesquisa / Categorias]
    F --> G[Vê profissionais e serviços]
    G --> H{Quer contactar?}
    
    H -->|Sim| I{Tem conta?}
    I -->|Não| J[Modal: Criar Conta]
    J --> K[Escolhe: Cliente ou Nhonguista]
    K --> L[Registo: Nome + Email + Telefone + Senha]
    L --> M[Login automático]
    I -->|Sim| N[Botão Entrar → Login]
    
    M --> O[Regista contacto na DB]
    N --> O
    O --> P[Redireciona para WhatsApp]
    
    H -->|Não| E
    
    D --> Q[CTA: Quero ser Nhonguista]
    Q --> J
```

---

## 👥 Sistema de Roles (Multi-Role)

Um utilizador pode ter **múltiplas roles** simultaneamente.

```mermaid
erDiagram
    USERS ||--o{ USER_ROLES : "tem"
    USER_ROLES }o--|| ROLES : "referencia"
    USERS ||--o| PROVIDER_PROFILES : "pode ter"
    
    USERS {
        uuid id PK
        string name
        string email UK
        string phone UK
        string password
        string avatar
        boolean is_active
        timestamp email_verified_at
    }
    
    ROLES {
        uuid id PK
        string name UK
        string slug UK
        string description
    }
    
    USER_ROLES {
        uuid id PK
        uuid user_id FK
        uuid role_id FK
        timestamp assigned_at
    }
    
    PROVIDER_PROFILES {
        uuid id PK
        uuid user_id FK
        text bio
        decimal rating
        integer total_reviews
        boolean is_verified
        json social_links
    }
```

### Roles Disponíveis (seed)
| Role | Slug | Descrição |
|------|------|-----------|
| Cliente | `client` | Pode pesquisar, contactar e avaliar |
| Nhonguista | `provider` | Pode publicar serviços e receber contactos |
| Administrador | `admin` | Gestão total da plataforma |

> **Exemplo:** Um utilizador regista-se como `client`, depois decide oferecer serviços → adiciona-se a role `provider` sem perder a de `client`.

---

## 📊 Modelo de Dados Completo

```mermaid
erDiagram
    USERS ||--o{ SERVICES : "publica"
    USERS ||--o{ REVIEWS : "escreve"
    USERS ||--o| PROVIDER_PROFILES : "tem perfil"
    USERS ||--o{ CONTACTS : "contacta"
    USERS ||--o{ USER_ROLES : "tem roles"
    
    CATEGORIES ||--o{ SERVICES : "agrupa"
    SERVICES ||--o{ REVIEWS : "recebe"
    SERVICES ||--o{ CONTACTS : "gera"
    
    LOCATIONS ||--o{ SERVICES : "localiza"
    
    CATEGORIES {
        uuid id PK
        string name
        string slug UK
        text description
        string icon
        string image
        integer order
        boolean is_active
    }
    
    SERVICES {
        uuid id PK
        uuid user_id FK
        uuid category_id FK
        uuid location_id FK
        string title
        text description
        decimal price_min
        decimal price_max
        enum price_type
        json images
        boolean is_active
        boolean is_featured
    }
    
    REVIEWS {
        uuid id PK
        uuid service_id FK
        uuid reviewer_id FK
        integer rating
        text comment
    }
    
    CONTACTS {
        uuid id PK
        uuid client_id FK
        uuid service_id FK
        uuid provider_id FK
        enum channel
        string message
        timestamp contacted_at
    }
```

---

## 🔐 Fluxo de Autenticação

```mermaid
sequenceDiagram
    participant V as Visitante
    participant F as Frontend (Next.js)
    participant A as API (Laravel)
    participant DB as Database
    
    Note over V,DB: Registo
    V->>F: Clica "Criar Conta"
    F->>F: Mostra formulário (Nome, Email, Telefone, Senha, Role)
    V->>F: Preenche dados
    F->>A: POST /api/register
    A->>DB: Cria User + atribui Role
    A->>F: { user, token, roles }
    F->>F: Guarda token (localStorage/cookie)
    F->>V: Redireciona ao Portal
    
    Note over V,DB: Login
    V->>F: Clica "Entrar"
    F->>F: Mostra login (Email/Telefone + Senha)
    V->>F: Preenche credenciais
    F->>A: POST /api/login
    A->>DB: Valida credenciais
    A->>F: { user, token, roles }
    F->>F: Guarda token
    F->>V: Redireciona ao Portal
```

---

## 📱 Fluxo de Contacto (WhatsApp)

```mermaid
sequenceDiagram
    participant C as Cliente
    participant F as Frontend
    participant A as API
    participant W as WhatsApp
    
    C->>F: Clica "Contactar Nhonguista"
    F->>F: Verifica se está logado
    
    alt Não logado
        F->>C: Modal "Crie conta para contactar"
        C->>F: Cria conta / Faz login
    end
    
    F->>A: POST /api/contacts (service_id, provider_id, channel: "whatsapp")
    A->>A: Regista contacto na DB
    A->>F: { success, whatsapp_url }
    F->>W: window.open(wa.me/telefone?text=...)
```

---

## 📐 Estrutura de Páginas

```
/ (Landing Page)
├── Navegação livre sem conta
├── Hero + Barra de pesquisa
├── Grid de Categorias (da API)
├── Nhonguistas em destaque (da API)
└── Como funciona + Stats

/categorias/[slug]
├── Lista de serviços da categoria
└── Filtros (preço, localização, avaliação)

/servicos/[id]
├── Detalhe do serviço
├── Perfil do Nhonguista
├── Reviews
└── CTA: Contactar (requer conta)

/nhonguistas
├── Lista de providers
└── Filtros + pesquisa

/nhonguistas/[id]
├── Perfil completo
├── Serviços oferecidos
└── Avaliações recebidas

/entrar → Login
/registar → Registo (com role selection)

/portal (requer auth)
├── Dashboard básico
└── Meus serviços (se provider)
```

---

*Desenvolvido pelos Irmãos Muacigarro & ZEDECK'S IT — Nampula, Moçambique 🇲🇿*
