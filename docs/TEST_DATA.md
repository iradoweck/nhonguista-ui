# 🧪 Dados de Teste - Nhonguista

Estes dados são gerados automaticamente pelo comando `php artisan migrate:fresh --seed`. Utilize-os para testar as funcionalidades do MVP.

## 👥 Utilizadores de Acesso

| Role | Telefone | Senha | Nome de Exemplo |
| :--- | :--- | :--- | :--- |
| **Administrador** | `+258840000000` | `password123` | Edmilson Muacigarro |
| **Cliente** | `840000001` | `password` | Cliente de Teste |
| **Nhonguista (Pro)** | `841234567` | `password` | João Pedreiro |
| **Nhonguista (Pro)** | `829876543` | `password` | Maria Limpezas |

---

## 🛠️ Serviços de Exemplo (Nampula)

| Serviço | Categoria | Localização | Prestador |
| :--- | :--- | :--- | :--- |
| **Assentamento de Blocos** | Construção | Variável | João Pedreiro |
| **Limpeza Profunda** | Limpeza | Variável | Maria Limpezas |

---

## 🔑 Notas Importantes
- **Base de Dados:** SQLite (padrão local).
- **API URL:** `http://localhost:8000/api`
- **Frontend URL:** `http://localhost:3000`
- **Admin URL:** `http://localhost:3001`

> [!IMPORTANT]
> Se resetar a base de dados, execute `php artisan migrate:fresh --seed` para restaurar estes dados.
