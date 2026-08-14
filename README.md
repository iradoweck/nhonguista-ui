# 🎨 @nhonguista/ui (Design System)

> Biblioteca de componentes React oficiais, acessíveis e genéricos do ecossistema Nhonguista.

<p align="center">
  <img src="https://img.shields.io/badge/Base-Radix%20UI-161618?style=for-the-badge" alt="Radix UI">
  <img src="https://img.shields.io/badge/Estilização-TailwindCSS%20v4-06B6D4?style=for-the-badge&logo=tailwindcss" alt="TailwindCSS">
  <a href="LICENSE"><img src="https://img.shields.io/badge/Licen%C3%A7a-Open%20Core%20(Dual)-green?style=for-the-badge" alt="Licença"></a>
</p>

## 📖 Sobre o Projeto

O **@nhonguista/ui** é o coração visual da plataforma Nhonguista. Baseado no ecossistema `Radix UI` e `Tailwind CSS v4`, este pacote fornece uma fundação sólida para a construção de interfaces de utilizador (UIs) consistentes, acessíveis e visualmente premium através das diversas aplicações do monorepo (como a Landing Page e o Admin Dashboard).

Este pacote é genérico por natureza — **não contém lógica de negócio** nem dados específicos do produto. É Open Source para incentivar os desenvolvedores locais a aprenderem e colaborarem na padronização de interfaces de alta qualidade em Moçambique.

## 🚀 Instalação e Uso

Dentro do monorepo Nhonguista, este pacote já está configurado via workspaces. Para usar numa aplicação (ex: `apps/landing`), instale-o como dependência no `package.json`:

```json
{
  "dependencies": {
    "@nhonguista/ui": "workspace:*"
  }
}
```

### Configuração do Tailwind v4

Como o ecossistema utiliza Tailwind v4, a configuração base (tokens de espaçamento, cores da marca, e utilitários globais) está embutida no ficheiro CSS deste pacote.

No ficheiro de *layout* global ou *entrypoint* do teu projeto (ex: `app/layout.tsx` ou `src/main.tsx`), basta importar o CSS:

```tsx
// app/layout.tsx
import "@nhonguista/ui/globals.css";
// ... os teus outros imports

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
```

### Exemplo de Utilização

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "@nhonguista/ui"

export default function Exemplo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Serviços Premium</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-muted-foreground">
          Encontre os melhores profissionais de Nampula.
        </p>
        <Button variant="whatsapp">Contactar via WhatsApp</Button>
      </CardContent>
    </Card>
  )
}
```

## 🛠️ Arquitetura e Componentes

O Design System é focado em acessibilidade (WAI-ARIA) e as Variáveis de Cor são pensadas para contrastes adequados.

### Paleta de Marca (CSS Variables)

As cores oficiais já estão definidas no `globals.css` e disponíveis como utilitários do Tailwind:
- **`brand`**: Cor primária do Nhonguista (Azul). Usada como `bg-brand`, `text-brand`, etc.
- **`whatsapp`**: Verde oficial (`#25D366`), reservado ao CTA de contacto.
- **`neutral`**: Escala de cinzentos para textos e fundos.

### Componentes Disponíveis

- **Primitivos**: `Button` (incluindo variante `whatsapp`), `Card`, `Input`, `Badge`, `Avatar`, `Select`
- **Feedback e Estado**: `Skeleton`, `EmptyState`, `Toaster` (com hook `useToast`), `Tooltip`
- **Navegação e Estrutura**: `Breadcrumb`, `Container`
- **Sobreposição / Modais**: `Dialog`
- **Conteúdo**: `Rating`, `Gallery` (modal de imagens embutido)

> **Nota:** Componentes de composição complexa específicos de produto (como `Navbar` ou `Footer`) vivem diretamente nas aplicações consumidoras (ex: `apps/landing`), mantendo esta UI lib estritamente agnóstica.

## 🤝 Quer Contribuir?

A comunidade é bem-vinda para ajudar a evoluir a **UI** e a **Landing Page**. 
Leia nosso [CONTRIBUTING.md](CONTRIBUTING.md) para entender como as PRs funcionam na branch `devlab`, as regras de *Tags*, e nossos Padrões de Commit em Inglês.

**Regra de Ouro para Contribuidores:**
Este pacote é intencionalmente **genérico**. *Pull requests* que introduzam lógica de negócio, textos fixos específicos do produto (hardcoded), ou dependências de serviços de backend não serão aceites aqui. Esse código pertence ao repositório centralizado das aplicações (Core).

Por favor, garanta que suas interações seguem nosso [Código de Conduta (CODE_OF_CONDUCT.md)](CODE_OF_CONDUCT.md).

- [Reportar um Bug](../../issues/new?template=bug_report.md)
- [Sugerir Melhoria](../../issues/new?template=feature_request.md)

### 🔒 Política de Segurança
Pesquisadores de segurança: Se encontrarem vulnerabilidades no nosso Backend ou Painel Administrativo, **NÃO** abram Issues públicas. Confiram nosso arquivo [SECURITY.md](SECURITY.md) para instruções de reporte confidencial.

---

## 👥 Equipa, Suporte e Créditos

Este projeto é visionado e mantido ativamente com dedicação aos talentos de Nampula.

---
*Construído com dedicação pela ZEDECK'S IT e a Comunidade Open Source.*
