# Modelo de Dados — Nhonguista MVP

> Referência técnica completa do schema de base de dados da plataforma.

---

## 📊 Diagrama Relacional (ERD)

```mermaid
erDiagram
    USERS ||--o{ USER_ROLES : "tem"
    ROLES ||--o{ USER_ROLES : "atribuída a"
    USERS ||--o| PROVIDER_PROFILES : "perfil profissional"
    USERS ||--o{ SERVICES : "publica"
    USERS ||--o{ REVIEWS : "escreve"
    USERS ||--o{ CONTACTS : "inicia contacto"
    
    CATEGORIES ||--o{ SERVICES : "agrupa"
    SERVICES ||--o{ REVIEWS : "recebe"
    SERVICES ||--o{ CONTACTS : "gera contacto"
    LOCATIONS ||--o{ SERVICES : "localiza"

    USERS {
        uuid id PK
        string name "NOT NULL"
        string username "UNIQUE, NULLABLE"
        string email "UNIQUE, NOT NULL"
        string phone "UNIQUE, NOT NULL"
        string avatar "NULLABLE, filesystem path"
        string password "HASHED"
        boolean is_active "DEFAULT true"
        boolean is_verified "DEFAULT false"
        enum verification_status "unverified|pending|verified|rejected"
        timestamp email_verified_at "NULLABLE"
        timestamp deleted_at "SOFT DELETE"
        timestamps created_at
        timestamps updated_at
    }
    
    ROLES {
        uuid id PK
        string name "UNIQUE: Cliente, Nhonguista, Admin"
        string slug "UNIQUE: client, provider, admin"
        string description "NULLABLE"
        timestamps created_at
        timestamps updated_at
    }
    
    USER_ROLES {
        uuid id PK
        uuid user_id FK "CASCADE ON DELETE"
        uuid role_id FK "CASCADE ON DELETE"
        timestamp assigned_at "DEFAULT now()"
        timestamps created_at
        timestamps updated_at
    }
    
    PROVIDER_PROFILES {
        uuid id PK
        uuid user_id FK "UNIQUE, CASCADE ON DELETE"
        text bio "NULLABLE"
        decimal rating "DEFAULT 0.00, precision 3,2"
        integer total_reviews "DEFAULT 0"
        boolean is_verified "DEFAULT false"
        json social_links "NULLABLE"
        timestamp deleted_at "SOFT DELETE"
        timestamps created_at
        timestamps updated_at
    }
    
    CATEGORIES {
        uuid id PK
        string name "NOT NULL"
        string slug "UNIQUE"
        text description "NULLABLE"
        string icon "NULLABLE, emoji ou classe CSS"
        string image "NULLABLE, filesystem path"
        integer order "DEFAULT 0"
        boolean is_active "DEFAULT true"
        timestamp deleted_at "SOFT DELETE"
        timestamps created_at
        timestamps updated_at
    }
    
    SERVICES {
        uuid id PK
        uuid user_id FK "CASCADE ON DELETE"
        uuid category_id FK "CASCADE ON DELETE"
        uuid location_id FK "NULLABLE"
        string title "NOT NULL"
        text description "NULLABLE"
        decimal price_min "NULLABLE, precision 10,2"
        decimal price_max "NULLABLE, precision 10,2"
        enum price_type "fixo|hora|negociavel"
        json images "NULLABLE, array de paths"
        boolean is_active "DEFAULT true"
        boolean is_featured "DEFAULT false"
        timestamp deleted_at "SOFT DELETE"
        timestamps created_at
        timestamps updated_at
    }
    
    REVIEWS {
        uuid id PK
        uuid service_id FK "CASCADE ON DELETE"
        uuid reviewer_id FK "CASCADE ON DELETE"
        integer rating "1 a 5"
        text comment "NULLABLE"
        timestamps created_at
        timestamps updated_at
    }
    
    CONTACTS {
        uuid id PK
        uuid client_id FK "Quem contactou"
        uuid service_id FK "NULLABLE, serviço que motivou"
        uuid provider_id FK "Quem foi contactado"
        enum channel "whatsapp|phone|email"
        text message "NULLABLE, mensagem enviada"
        timestamp contacted_at "Quando aconteceu"
        timestamps created_at
        timestamps updated_at
    }
    
    LOCATIONS {
        uuid id PK
        string city "DEFAULT Nampula"
        string province "DEFAULT Nampula"
        string neighborhood "NULLABLE"
        string address "NULLABLE"
        decimal latitude "NULLABLE, precision 10,8"
        decimal longitude "NULLABLE, precision 11,8"
        timestamps created_at
        timestamps updated_at
    }
    
    NOTIFICATIONS {
        uuid id PK
        uuid user_id FK
        string type
        text message
        boolean is_read "DEFAULT false"
        timestamps created_at
        timestamps updated_at
    }
    
    VERIFICATIONS {
        uuid id PK
        uuid user_id FK
        string document_type
        string document_path "filesystem path"
        enum status "pending|approved|rejected"
        text notes "NULLABLE"
        timestamps created_at
        timestamps updated_at
    }
```

---

## 📏 Índices e Constraints

| Tabela | Índice | Tipo |
|--------|--------|------|
| `users` | `email` | UNIQUE |
| `users` | `phone` | UNIQUE |
| `users` | `username` | UNIQUE |
| `categories` | `slug` | UNIQUE |
| `categories` | `is_active, order` | COMPOSITE |
| `services` | `user_id, category_id` | COMPOSITE |
| `services` | `is_active, is_featured` | COMPOSITE |
| `user_roles` | `user_id, role_id` | UNIQUE (compound) |
| `reviews` | `service_id, reviewer_id` | UNIQUE (um review por serviço) |
| `contacts` | `client_id, provider_id` | INDEX |

---

## 🔑 Decisões Técnicas

1. **UUIDs** em todas as tabelas (segurança + portabilidade)
2. **Soft Deletes** em Users, ProviderProfiles, Categories, Services (auditoria)
3. **Multi-Role** via pivot table (um user pode ser `client` + `provider`)
4. **Imagens**: Filesystem local (`storage/app/public`) via Laravel Storage
5. **Moeda**: Metical (MZN) — preços em `decimal(10,2)`
6. **Contactos**: Sempre registados na DB antes de redirecionar ao WhatsApp

---

## 🌱 Seeds Iniciais

### Roles
- `client` — Cliente
- `provider` — Nhonguista (Profissional)
- `admin` — Administrador

### Categorias
- Limpeza Residencial
- Manutenção Elétrica
- Encanamento
- Pintura
- Desenvolvimento Web
- Design Gráfico
- Fotografia
- Transporte e Mudanças
- Culinária e Confeitaria
- Aulas Particulares

### Localizações
- Nampula Centro, bairros principais

---

*Desenvolvido pelos Irmãos Muacigarro & ZEDECK'S IT — Nampula, Moçambique 🇲🇿*
