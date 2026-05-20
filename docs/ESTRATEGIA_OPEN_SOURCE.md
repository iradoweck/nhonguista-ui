# Estratégia Open Source vs Closed Source

O **Nhonguista** acredita no poder da comunidade técnica africana. Por isso, dividimos nossa base de código de forma estratégica.

## OPEN SOURCE (Público)
Componentes que podem beneficiar outros desenvolvedores e fortalecer o ecossistema tecnológico.

| Pacote | Repositório | Descrição |
|--------|-------------|-----------|
| **@nhonguista/ui** | [zedecks/nhonguista-ui](https://github.com/zedecks/nhonguista-ui) | Design System e biblioteca de componentes. |
| **@nhonguista/sdk** | [zedecks/nhonguista-sdk](https://github.com/zedecks/nhonguista-sdk) | Cliente SDK para integração com a plataforma. |
| **@nhonguista/utils** | [zedecks/nhonguista-utils](https://github.com/zedecks/nhonguista-utils) | Funções de utilidade (validação de documentos moçambicanos, formatação de telefones, etc). |

## CLOSED SOURCE (Privado)
O núcleo competitivo e dados sensíveis da nossa startup.

- **Core API (Laravel):** Algoritmos de matching, lógica de monetização e gestão de usuários.
- **Admin App:** Painel de controle interno.
- **Modelos de IA:** Nossas implementações futuras de inteligência artificial.
- **Infraestrutura:** Scripts de deploy e configurações de servidores.

## Licenciamento
- **Open Source:** AGPL-3.0-or-later (Protecção controlada — qualquer uso, incluindo SaaS, obriga a partilhar o código modificado).
- **Closed Source:** Proprietary (Uso exclusivo da ZEDECK'S IT).

## Arquitetura de Repositórios

Cada pacote open source vive no seu próprio repositório público no GitHub (sob a organização `zedecks`) e é integrado no monorepo privado como um **Git Submodule** apontando para a branch `devlab`. Um fork pessoal de destaque existe sob `iradoweck` para cada pacote.

A sincronização entre os repositórios públicos e o monorepo privado é feita automaticamente via **GitHub Actions**.

## Contribuição
Encorajamos a comunidade a contribuir nos pacotes Open Source via Pull Requests, seguindo nossos padrões de código.
